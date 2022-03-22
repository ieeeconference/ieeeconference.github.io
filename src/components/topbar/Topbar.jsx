import React from 'react';
import './topbar.css';
import iee from '../../images/ieee1.jpg'
import logo from '../../images/icetLogo.png';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="container">
                <img src='' alt="" className='ieeLogo'/>
                <img src={logo} alt="" className='ilahiaLogo'/>
            </div>
        </div>
    );
}

export default Topbar;
