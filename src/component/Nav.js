import React from 'react'
import {Link} from 'react-router-dom'


const Nav = ()  => {
  return (
    <div className='menuList'>
       <ul>
            <li className='navItem'><Link to="/home">Home</Link> </li>
            <li className='navItem'><Link to="/about">About</Link></li>
            <li className='navItem'><Link to="/contact">Contact</Link> </li>
            <li className='navItem'><Link to="/profile">Profile</Link></li>
            <li className='navItem'><Link to="/">Logout</Link></li>
        
       </ul>
    </div>   
  )
}

export default Nav
