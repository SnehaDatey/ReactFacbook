import React, { useContext } from 'react'


function Home(props) {
  props.setInitialPage('home');
 
  return (
    <div>
      This is Home Page
    </div>
  )
}

export default Home
