import React, {useContext, useState} from 'react'
import UserContext from '../Context/UserContext';
import './RegisterForm.scss'

function RegisterForm(props) {
    const {LoggedInUser} = useContext(UserContext);
    const [fullName, setFullName] = useState(props.page === 'edit' ? LoggedInUser.fullName : '');
    const [username, setUserName] = useState(props.page === 'edit' ? LoggedInUser.username : '');
    const [password, setPassword] = useState(props.page === 'edit' ? LoggedInUser.password : '');
    const [email, setEmail] = useState(props.page === 'edit' ? LoggedInUser.email : '');
    const [mobile, setMobile] = useState(props.page === 'edit' ? LoggedInUser.mobile : '');

    const [checkUser, setCheckUser] =useState(false);
    const [suggestions, setSuggestions] = useState();
    const [suggestions2, setSuggestions2] = useState();

    const [valid, setValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    const validateUser = () => {

        if (fullName !== '' && username !== '' && password !== '' && email !== '' && mobile !== '') {
            setValid(true);
            
        }

    }
    const userAlreadyExist = (userList,username) => {

        const filteredUserList = userList?.filter((user)=> {
            const userObject = JSON.parse(user);
            if(userObject.username === username)
            {
                return user;
            }
        })

        return filteredUserList;

    }
    const Register=(userList,users)=>{

        if(userAlreadyExist(userList,users.username).length > 0){
                setCheckUser(users.username);
                let randomNum = Math.random() * 10000;

               if(userAlreadyExist(userList,users.username+parseInt(randomNum)).length === 0){

                setSuggestions(users.username + parseInt(randomNum));
                setSuggestions2(users.username +'_'+ parseInt(randomNum));
                 //Generate random values for different Username
               }
        }
        else{
            setCheckUser(false);
            userList.push(JSON.stringify(users)); //convert JSON object into string.
            localStorage.setItem('userList', JSON.stringify(userList));
            console.log('userList', userList);
            setErrorMsg('');
            window.location.href = '/';
        }
    } 

    const UpdateProfile=(userList,users)=>{

        const filteredUserList = userList.filter((user)=> {
            const userObject = JSON.parse(user);
            if(userObject.username !== LoggedInUser.username)
            {
                return(user)
            }
        })

        filteredUserList.push(JSON.stringify(users)); //convert JSON object into string.
        localStorage.setItem('userList', JSON.stringify(filteredUserList));
        setErrorMsg('');
        window.location.href = '/home';


    }

    const SaveProfile = () => {
        validateUser();
        if (valid) {
            const users = {
                fullName: fullName,
                username: username,
                password: props.page==='edit' ? LoggedInUser.password : password,
                email: email,
                mobile: mobile
            }

            
            let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];

            if(props.page==='edit'){
                UpdateProfile(userList,users)
            }
            else{
              
               Register(userList,users);
            }
          
        }
        else {
            setErrorMsg('Please enter all details');
        }
    }

  return (
    <div className='SignupDiv'>
{props.page !=='edit' && <h2>Signup</h2> }
{props.page ==='edit' && <h2>Edit Profile</h2> }
<div className='errorMsg'>{errorMsg}</div>

        <div className='loginControl'>
           
            <div classname="loginInput">
                <input type="text" name='fullName' value={fullName} onChange={(event)=> setFullName(event.target.value)} placeholder='Full Name' className='inputText'/>
            </div>
        </div>

        <div className='loginControl'>
           
           <div classname="loginInput">
               <input type="text" name='username' value={username} onChange={(event)=> setUserName(event.target.value)} placeholder='Username' className='inputText'/>
           </div>
           {checkUser && 
<div className='errorMsgcheckUser'><b>{checkUser}</b> is already exist..try another. 
            <span>Some More Suggestions <b>{suggestions}</b> or <b>{suggestions2}</b></span>
</div>}
       </div>

{props.page !=='edit' &&
       <div className='loginControl'>
          
           <div classname="loginInput">
               <input type="password" name='password' value={password} onChange={(event)=> setPassword(event.target.value)} placeholder='Password' className='inputText'/>
           </div>
        </div>
}
        <div className='loginControl'>
           
           <div classname="loginInput">
               <input type="text" name='email'  value={email} onChange={(event)=> setEmail(event.target.value)} placeholder='Email' className='inputText'/>
           </div>
       </div>


       <div className='loginControl'>
           
            <div classname="loginInput">
                <input type="text" name='mobile'   value={mobile} onChange={(event)=> setMobile(event.target.value)} placeholder='Mobile' className='inputText'/>
            </div>
        </div>

        <div className='loginControl'>
                <button type='button' className='submitBtn' onClick={SaveProfile}>{props.page=== 'edit' ?<>Update</> : <>Signup</>}</button>
            </div>
      
    </div>
  )
}

export default RegisterForm
