import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';
import VideoContext from '../Context/VideoContext';
import './videoUpload.scss'

function VideoUpload(props) {

    const { LoggedInUser } = useContext(UserContext);
    const [videoTitle, setVideoTitle] = useState();
    const [videoURL, setVideoURL] = useState();
    const { setVideoData } = useContext(VideoContext);
    const [dialog, setDialog] = useState(false);
    const [videoTab, setVideoTab] = useState('youtube');

    const switchVideoUpload = (tabValue) => {
        setVideoTab(tabValue)
    }

    const showPopup = (value) => {
        setDialog(value)
    }

    const uploadVideo = () => {

        if (videoTitle === '' && videoURL === '') {
            alert('Enter Video Details')
        }
        else {
            const videos = {
                username: LoggedInUser.username,
                title: videoTitle,
                url: videoURL
            }
            const videoList = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [];
            videoList.push(videos)
            localStorage.setItem('videos', JSON.stringify(videoList));
            setVideoData(videoList);
        }
        props.showPopup(false);

    }


    const setVideoURLFromLocal = (event) => {
        if(event.target.files[0]?.type === 'video/mp4'){
            setVideoURL(event.target.files[0]);
        }
        else{
            setVideoURL(' ');
        }
    }

    return (
        <div>

            {props.dialog &&
                <div>

                    <div className='uploadVideo_overlay' onClick={() => props.showPopup(false)}></div>
                    <div className='uploadVideoModal'>
                        {/*<i className="fa fa-youtube" title='Youtube'></i>
 <i className="fa fa-display" title='Computer'></i> */}
                        <div className='video-tab'>
                            <ul>
                                <li onClick={() => switchVideoUpload('youtube')} className={`${videoTab === 'youtube' ? 'active' : ''}`}> <i className="fa fa-youtube" title='Youtube'></i></li>
                                <li onClick={() => switchVideoUpload('computer')} className={`${videoTab === 'computer' ? 'active' : ''}`}> <i className="fa fa-display" title='Computer'></i></li>
                            </ul>

                        </div>


                        <h3>{videoTab === 'youtube' ? 'Upload Youtube Video' : 'Upload Video From System' }</h3>

                        <div className='video'>
                            <input type='text' value={videoTitle} onChange={(event) => setVideoTitle(event.target.value)} placeholder='Enter Video Title Here...' />
                        </div>

                        <div className='video'>
                            {videoTab === 'youtube' &&
                                <input type='text' value={videoURL} onChange={(event) => setVideoURL(event.target.value)} placeholder='Enter Youtube Embed URL Here...' />
                            }

                            {videoTab === 'computer' &&
                                <span className='uploadSystemVideo_btn'>

                                    <span className='uploadSpan'>
                                        <i class="fa fa-upload"></i> &nbsp; Select Video
                                    </span>

                                    <input type='file' className='inputFile' onChange={(event) => setVideoURLFromLocal(event)} />
                                    {videoURL && 
                                        <video controls>
                                                <source src={`./${videoURL.name}`} />

                                        </video>
                                    }
                                </span>
                            }

                        </div>


                        <div >
                            <button className='uploadBtn' onClick={uploadVideo}>Upload</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default VideoUpload
