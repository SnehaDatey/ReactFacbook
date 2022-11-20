import React from 'react'
import './Signup.scss'
import { Link } from 'react-router-dom'
import RegisterForm from '../RegisterForm/RegisterForm';

function Signup(props) {
    props.setInitialPage('signup');
 return (
        <div>
            <RegisterForm />
            <div className='loginControl'><div className='backLogin'><Link to="/">Back to Login</Link></div></div>
        </div>

    )
}

export default Signup;

