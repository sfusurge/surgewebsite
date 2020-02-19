import React from 'react'
import './../style/header.css'
import headerLogo from './../images/Asset2@3x-8.2.png';
import headerBackground from './../images/Vector1.png';
import headerImage from './../images/Asset3@3x-8.1.png'
class Header extends React.Component{
  render(){
    return(
      <div>
        <img className = 'headerBackground' src = {headerBackground}/>
        <img className = 'headerLogo' src = {headerLogo}/>
        <img className = 'headerImage' src = {headerImage}/>
      </div>
    )
  }
}

export default Header
