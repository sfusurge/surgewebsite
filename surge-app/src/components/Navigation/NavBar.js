import React from 'react';
import { Link } from "react-router-dom";
import SurgeLogo from "../../assets/surge-logo-small.png";
import "./NavBar.css";
import SideBarToggleButton from '../SideBar/SideBarToggleButton'

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar-navigator">
      <div className="sidebar-toggle-button">
        <SideBarToggleButton click={props.sidebarClickHandler}></SideBarToggleButton>
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={SurgeLogo} alt="Surge Logo"></img>
        </Link>
      </div>
      <div className="navbar-items-spacer"></div>
      <div className="navbar-items">
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>ProjectHub</li>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
