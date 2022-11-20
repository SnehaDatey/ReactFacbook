import React, {useContext, useState} from 'react'
import VideoContext from './Context/VideoContext';
import './tab.scss'

const Tab = () => {
 
  const {VideoData} = useContext(VideoContext);
  const sharedVideos = ['shared vid1','shared vid2','shared vid3'];
  const [activeTab, setActiveTab] = useState('my-video');
  const currentUser = sessionStorage.username;
 
  const tabToggle = (tab) => {
      setActiveTab(tab)
    }

  return (
    <div>
        <div className="Tabs">
          <div className={`${activeTab === 'my-video' ? 'active' : ''} tab-item`} onClick={()=> tabToggle('my-video')}>My Videos</div>
          <div className={`${activeTab === 'shared-video' ? 'active' : ''} tab-item`} onClick={()=> tabToggle('shared-video')}>Shared Videos</div>
        </div>

        <div className='tab-content'>
          {activeTab === 'my-video' &&
            <div>
            {VideoData?.map((video,index)=> (
              <>
              {currentUser === video?.username && 
                 <div className="video-list" key={index}>
                  <h3>{video.title}</h3>
                  <iframe src={video.url} width="300px" title="myVideos"/>
                  </div>
              }
              </>
            ))}
           </div>
          
          }          
          
          {activeTab === 'shared-video' && 
          <div>
             {sharedVideos?.map((video)=> (
                  <div>{video}</div>
             ))}
            </div>
          } 
        </div>
    </div>
  )
}

export default Tab
