import React from 'react'
import './../style/Navigation.css'

class Navigation extends React.Component{
  render(){
    return(
      <div className = "nav">
        <a className = "navAbout">About</a>
        <a className = "navStormHacks">StormHacks</a>
        <a className = "navProjectHub">ProjectHub</a>
      </div>
    )
  }
}

export default Navigation;
