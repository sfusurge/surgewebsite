import React from 'react';
import SurgeLogo from "../../assets/surge-logo-small.png"
import './NavBar.css';

const NavBar = props => (
    <header className="navbar">
        <nav className="navbar-navigator">
            <div></div>
            <div className="navbar-logo">
                <a href="/">
                    <img src={SurgeLogo} alt="Surge Logo"></img>
                </a>
            </div>
            <div className="navbar-items-spacer"></div>
            <div className="navbar-items">
                <ul>
                    {/* update the links later */}
                    <li><a href="/">About</a></li>
                    <li><a href="/">ProjectHub</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;