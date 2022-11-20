import React, {useState} from 'react'
import './Nav'
import logo from './images/logo.png'
import './topHeader.scss'
import Nav from './Nav';
import Search from './Search';
// import UserContext from './Context/UserContext';
// import VideoContext from './Context/VideoContext';
import VideoUpload from './VideoUpload/VideoUpload';


function TopHeader() {
  // const {LoggedInUser} = useContext(UserContext);
  const [menubar, setMenubar] = useState(false);
   const [dialog, setDialog] = useState(false);
  // const [videoTitle, setVideoTitle] = useState();
  // const [videoURL, setVideoURL] = useState();
  // const {setVideoData} = useContext(VideoContext);


  const showPopup = (value) => {
    setDialog(value)
  }

  // const uploadVideo = () => {

  //   if(videoTitle === '' && videoURL === '')
  //   {
  //     alert('Enter Video Details')
  //   }
  //   else
  //   {
  //     const videos = {
  //       username:LoggedInUser.username,
  //      title:videoTitle,
  //      url:videoURL
  //     }
  //     const videoList = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [];
  //     videoList.push(videos)
  //     localStorage.setItem('videos', JSON.stringify(videoList));
  //     setVideoData(videoList);
  //   }
  //   showPopup(false);
  
  // }


  return (
    <div className='imgSearch'>
      <div className='divLeft'>
        <img src={logo} alt='Logo' height="50px" width="50px"/>
        
        <div className='search'>
          <Search />
        </div>

      </div>

      <div className='divRight'>
        <button className='uploadVideo' onClick={() => showPopup(true)}> Upload Video </button>

        <button className='uploadMore' onClick={() => setMenubar(true)}>
          <i className="fa fa-ellipsis-vertical"></i></button>
              
              <VideoUpload dialog={dialog} showPopup={showPopup} />
              {/* {dialog && 
              <div>
              <div className='uploadVideo_overlay' onClick={() => showPopup(false)}></div>
              <div className='uploadVideoModal'>
                     <h3> Upload Video</h3>

                     <div className='video'>
                        <input type='text' value={videoTitle} onChange={(event)=> setVideoTitle(event.target.value)} placeholder='Enter Video Title Here...'  />
                     </div>

                     <div className='video'>
                        <input type='text' value={videoURL} onChange={(event)=> setVideoURL(event.target.value)} placeholder='Enter Youtube Embed URL Here...'  />
                     </div>

                     <div >
                      <button className='uploadBtn' onClick={uploadVideo}>Upload</button>
                     </div>

              </div>
              </div>
              } */}

        {menubar &&
                
          <div className='menubar'>
             <Nav /> {/*****Menubar topRight********/}
          </div>
        
       }
    </div>
</div>
  )
}

export default TopHeader
