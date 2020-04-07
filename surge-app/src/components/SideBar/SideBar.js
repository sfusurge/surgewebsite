import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';

const SideBar = props => {
    let sidebarClasses = 'sidebar';
    if(props.visibility){
        sidebarClasses = 'sidebar open';
    }

    return(
        <nav className={sidebarClasses}>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/projects">
                    <li>ProjectHub</li>
                </Link>
            </ul>
        </nav>
    );
};

export default SideBar;