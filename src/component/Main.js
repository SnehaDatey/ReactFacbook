import React from 'react'
import BottomHeader from '../component/BottomHeader';
import Tab from '../component/Tab'
function Main(props) {
  props.setInitialPage('home');
  return (
    <div>
      <BottomHeader />
      <Tab />
    </div>
  )
}

export default Main


