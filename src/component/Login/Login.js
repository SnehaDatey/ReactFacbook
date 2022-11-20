import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = (props) =>{
  props.setInitialPage('login');
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();


  const login = () => {
    
    if(username !== '' && password !== ''){

      const userList = JSON.parse(localStorage.getItem('userList'));
      
      userList?.map((user)=>  {
        let currentUser = JSON.parse(user);
        if(currentUser.username === username && currentUser.password === password){
          setErrorMsg('');
          sessionStorage.username = username;
          window.location.href='/home';
         
        }
        else{
          setErrorMsg('Enter Correct Credentials');
        }
       
      })
      
    }
    else{
      
      setErrorMsg('Enter User Details');
    }
   
  }
  return (
    <div className='loginDiv'>
        <h2>Login</h2>
        <div className='errorMsg'>{errorMsg}</div>


      <div className='loginControl'>
           
            <div className="loginInput">
                <input type="text" name='username' placeholder='Enter Username' className='inputText' value={username} onChange={(event)=> setUserName(event.target.value)}/>
            </div>
        </div>


        <div className='loginControl'>
           
            <div className="loginInput">
                <input type="password" name='password' placeholder='Enter Password' className='inputText' value={password} onChange={(event)=> setPassword(event.target.value)}/>
            </div>


            <div className='loginControl'>
                <button className='submitBtn' type='submit' onClick={login}>Submit</button>
                </div>

                <div className='loginControl'>
                  <div className='createAccount'><Link to="/signup" >Create Account?</Link></div>
                </div>
      </div>
    </div>
  )
}

export default Login
