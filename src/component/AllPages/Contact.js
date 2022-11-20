import React, { useContext } from 'react'
import './contact.scss'
import contactImg from '../images/contact.png'
import ContactContext from '../Context/ContactContext';

function Contact(props) {
  props.setInitialPage('contact');
  const mobilenumber = useContext(ContactContext);
  return (
    <div className='contactDiv'>
    <h2>Contact</h2>
   

    <img src={contactImg} alt="" />
    <h3>Mobile Number : {mobilenumber.mobilenumber}</h3>
   
  </div>
  )
}

export default Contact
