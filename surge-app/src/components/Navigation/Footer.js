import React from 'react';
import FBLogo from "../../assets/facebook-logo.png"
import InstaLogo from "../../assets/instagram-logo.png"
import TwitterLogo from "../../assets/twitter-logo.png"
import GithubLogo from "../../assets/github-logo.png"
import './Footer.css';

const Footer = props => (
    <header className="footer">
        <nav className="footer-links">
            <div className="footer-items">
                <ul>
                    <li>
                        <a href={"https://www.facebook.com/sfusurge"} target="_blank" rel="noopener noreferrer">
                            <img src={FBLogo} alt="Facebook Logo"></img>
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.instagram.com/sfusurge/"} target="_blank" rel="noopener noreferrer">
                            <img src={InstaLogo} alt="Instagram Logo"></img>
                        </a>
                    </li>
                    <li>
                        <a href={"https://twitter.com/sfusurge"} target="_blank" rel="noopener noreferrer">
                            <img src={TwitterLogo} alt="Twitter Logo"></img>
                        </a>
                    </li>
                    <li>
                        <a href={"https://github.com/sfusurge"} target="_blank" rel="noopener noreferrer">
                            <img src={GithubLogo} alt="Github Logo"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Footer;