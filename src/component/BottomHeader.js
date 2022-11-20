import React, { useState,useEffect,useContext } from 'react'
import profileImg from './images/profileImg1.jpg'
import './bottomHeader.scss'
import { useNavigate } from 'react-router-dom';
import UserContext from './Context/UserContext'; 


function BottomHeader() {

  const bannerList = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [selectedBanner, setselectedBanner] = useState(bannerList[0]);

  const currentUser = sessionStorage.username;
  const userList = JSON.parse(localStorage.userList);
  const [userData, setUserData] = useState();
  const {setLoggedInUser} = useContext(UserContext);


 useEffect(()=> {
  userList?.map((user)=>{
      let logUser = JSON.parse(user);
      if(logUser.username === currentUser){
                      setUserData(logUser);
                      setLoggedInUser(logUser);
                    }
  })

 },[!userData])

 

  const selectBanner = (bannerImg) => {
    setselectedBanner(bannerImg)
   
  }

  const saveImg = () =>{
    setEdit(false)
  }

  const editProfile = () =>{
    navigate('/EditProfile');
   
  }
  
  return (
    <>
    <div className='bottomHeader'>


      <div className='leafBg'><img src={`./bgImages/${selectedBanner}`} alt='background'  ></img></div>

      <div className='profileImg'>
        <img src={profileImg} alt='' />
        <div>{userData?.fullName} <p>Nagpur, MH</p></div>
      </div>

      <div className='editBg' onClick={() => setEdit(true)}><button className='editBgBtn'> <i className="fa fa-pen"></i></button></div>

       <div className='editProfile' onClick={editProfile}><button> <i className="fa fa-pen"></i> Edit Profile </button></div>


      {edit &&
        <div>
          <div className='banner-overlay'></div>

                <div className='changeBanner'>
                  {bannerList.map((bannerImg) => (
                    <div onClick={() => selectBanner(bannerImg)}><img src={`./bgImages/${bannerImg}`} alt="Banner" /></div>
                  ))
                  }

            <button className='saveBtn' onClick={saveImg}>Save</button>
                </div>

                
        </div>
      }
    </div>
    </>

  )
}

export default BottomHeader
