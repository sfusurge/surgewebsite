import React from 'react';
import './SideBar.css';

const SideBar = props => {
    let sidebarClasses = 'sidebar';
    if(props.visibility){
        sidebarClasses = 'sidebar open';
    }

    return(
        <nav className={sidebarClasses}>
            <ul>
                {/* update these links later to match navbar */}
                <li><a href="/">About</a></li>
                <li><a href="/">ProjectHub</a></li>
            </ul>
        </nav>
    );
};

export default SideBar;