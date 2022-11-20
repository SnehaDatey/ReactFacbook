import './App.css';
import TopHeader from './component/TopHeader';
import Main from './component/Main';
import About from './component/AllPages/About'
import Contact from './component/AllPages/Contact'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './component/Login/Login';
import { useState } from 'react';
import Signup from './component/Signup/Signup';
import Profile from './component/AllPages/Profile';
import EditProfile from './component/EditProfile/EditProfile';
import ContactContext from './component/Context/ContactContext'
import UserContext from './component/Context/UserContext';
import VideoContext from './component/Context/VideoContext';
//import Footer from './component/Footer';

function App() {

  let username = '';
  const [initialPage, setInitialPage] = useState('login');
  const number = '8989893512';
  const [currentUser, setCurrentUser] = useState();
  const setCurrentUserData = (data) => {
    setCurrentUser(data);
  }

  const [videos, setVideos] = useState(localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : []);
 
  const setUserVideos = (videosList) => {
    setVideos(videosList)
  }
  
  return (
<>
    <BrowserRouter>
    <UserContext.Provider value={{LoggedInUser : currentUser, setLoggedInUser : setCurrentUserData}}>
      <VideoContext.Provider value={{VideoData : videos, setVideoData : setUserVideos}}>
      <ContactContext.Provider value={{mobilenumber: number}}>
        <div className="AppContainer">
          {(initialPage !== 'login' && initialPage !== 'signup') && <TopHeader />}
          <Routes>

            <Route index element={<Login setInitialPage={setInitialPage} />} />
            <Route path="/signup" element={<Signup setInitialPage={setInitialPage} />} />
            <Route path="/home" element={<Main setInitialPage={setInitialPage} />} />
            <Route path="/about" element={<About setInitialPage={setInitialPage} />} />
            <Route path="/contact" element={<Contact setInitialPage={setInitialPage} />} />
            <Route path="/profile" element={<Profile setInitialPage={setInitialPage} username={username} />} />
            <Route path="/EditProfile" element={<EditProfile setInitialPage={setInitialPage} />} />


          </Routes>
        </div>
      </ContactContext.Provider>
      </VideoContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
