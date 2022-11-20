import React,{useContext} from 'react'
import './profile.scss';
import { Link } from 'react-router-dom'
import UserContext from '../Context/UserContext';


const Profile = (props) => {
    props.setInitialPage('profile');

   const {LoggedInUser} = useContext(UserContext);
  return (
    <div className='profileDiv'>
        
      <h2>Profile</h2>
     <div className='profileBlock'>
      
      <div><b>Full Name &nbsp;&nbsp;:</b> {LoggedInUser?.fullName} </div>
     <div><b>User Name&nbsp;:</b> {LoggedInUser?.username} </div>
     <div><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{LoggedInUser?.email}</div>
     <div><b>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </b>{LoggedInUser?.mobile}</div>
     <div className='backtoHome'><Link to="/home">Back to Home</Link></div>
      </div>
      
    </div>
  )
}

export default Profile
