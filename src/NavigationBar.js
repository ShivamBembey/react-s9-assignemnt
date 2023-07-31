import React from 'react';
import atlassianLogo from './atlassianLogo.png';
import IconSVG from './IconSVG';

const NavigationBar = () => {
  return (
    <div>
        <nav >
        <div className="left-side">
            <img className="logo" src={atlassianLogo} alt="Logo" />
            <div className="company-name">ATLASSIAN</div>
            <ul className="nav-links">
            <li>
                Product <IconSVG />
            </li>
            <li>
                For Teams <IconSVG /> 
            </li>
            <li>
                Support <IconSVG /> 
            </li>
            </ul>
        </div>
        <div className="right-side">
            <ul className="nav-links">
            <li><button className="try-free-button">Try Free</button></li>
            <li><button className="buy-now-button">Buy Now</button></li>
            </ul>
            <div className="search-bar">
            <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-links">
            Login
            </div>
        </div>
        </nav>
        <div className="background-image">
            <h1 className="center-left-text">Move work forward</h1>
            <p className="center-left-text2">Atlassian helps teams work smarter and faster, together</p>
            <button>Learn more</button>
        </div>
    </div>
  );
};

export default NavigationBar;
