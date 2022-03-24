import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/ieee3.png';
import { Link } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp,  Close, Menu } from '@mui/icons-material';
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen,setIsOpen] = useState(false)
    const [isHotel,setIsHotel] = useState(false)
    const [thaqu,setThaqu] =useState(false)
    const [thaqu1,setThaqu1] =useState(false)
    const [thaqu2,setThaqu2] =useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    return (

      <div className={isScrolled ? "navbar scrolled scrolledmenu " : "navbar"}>
          <div className="navbarContainer">
              <div className="navbarLogo">
                  <img src='' alt=" " className='navbarLogo' />
              </div>
              <div className="navbarItem">
                  <Link to="/" className='link'>
                  <span className="navbarItems">Home</span>
                  </Link>
            <Link to="/oc" className='link'>
            <span className="navbarItems">Committee </span>
            </Link>
        
              <Link to="/" className='link'>
              <span className="navbarItems"   onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >Authors
              {isOpen &&(
                  <div className="options">
                     <Link to="/cfsp" classname='link'> <span className='optionsLink'>Call For Papers</span></Link>
                     <Link to="/cfwp" classname='link'> <span className='optionsLink'>Conference Tracks</span></Link>
                    
                  </div>
              ) }
              </span> </Link>


              <Link to="/" className='link' >
            <span className="navbarItems" onMouseEnter={() => setIsHotel(true)} onMouseLeave={() => setIsHotel(false)}>Hotel/Travel
            {isHotel &&(
                  <div className="options">
                      < Link to="/incredibleindia" className='link'><span className='optionsLink'>Incredible India</span></Link>
                      <Link to="/aboutkerala" className='link '><span className='optionsLink'>About Kerala</span></Link>
                      <Link to="/godsowncountry" className='link'><span className='optionsLink'>Travelling To God's Own Country</span></Link>
                      <Link to="/venue" className='link'><span className='optionsLink'>Conference Venue</span></Link>
                      <Link to="/accomadation" className='link'><span className='optionsLink'>Accomodation</span></Link>
                      <Link to="/mainattraction" className='link'><span className='optionsLink'>Main Attraction</span></Link>
                  </div>
              ) }
            </span>
            </Link>

              <Link to="/registration" className='link'>
              <span className="navbarItems">Registration</span>
              </Link>
            
             
            
              <Link to="/programmeShedule" className='link'>
              <span className="navbarItems">Programme Shedule</span>
              </Link>
             
              <Link to="/contactus" className='link'>
              <span className="navbarItems">Contact Us</span>
              </Link>
         
              </div>
            <div className="humBurger" onClick={()=>setOpen(!open)}>
               {!open?<Menu className='open'/>
               : <Close className='close'/>}
              
            </div>
            <ul className="menu" style={{right:open?"0":"-50vw"}}>
                <li className="menuitem">
                    <Link to="/"className='link'>
                    <span className="menuItems">Home
                    
                    </span>
                    </Link>
                </li>
                <li className="menuitem">
              
                <div className='menuItemdiv'>
                    <span className="menuItems"  onClick={()=>setThaqu1(!thaqu1)}>Commities</span>
                    {!thaqu1?<ArrowDropDown />:<ArrowDropUp/>}
            </div>
            {thaqu1&&(
                    <div className="commitee1">
                    <span className="commitee2">Organizing Committee</span>
                    <span className="commitee2">Technical Programme Committee</span>
                    </div>
                   )}
                </li>
                <li className="menuitem">
              
        
                <div className='menuItemdiv'>
              <span className="menuItems" onClick={()=>setThaqu2(!thaqu2)}>Authors</span>
              {!thaqu2?<ArrowDropDown />:<ArrowDropUp/>}
            </div>
            {thaqu2&&(
              <div className="commitee1">

              <span className="commitee2">Call For Papers</span>
              <span className="commitee2">Author Instructions</span>
              <span className="commitee2">Important Dates</span>
              </div>
             )}
          </li>
              
          <li className="menuitem">
              
            <div className='menuItemdiv'>
            <span className="menuItems" onClick={() => setThaqu(!thaqu)}>Hotel/Travel</span>
            {!thaqu?<ArrowDropDown />:<ArrowDropUp/>}
            </div>
             
             
              {thaqu&&(

  
              <div className="commitee1">
              <Link to="/programmeShedule" className='link'><span className="commitee2" >Incredible India</span></Link>
              
              <span className="commitee2">About Kerala</span>
              <span className="commitee2">Travelling To Gods On Country</span>
              <span className="commitee2">Conference Venue</span>
              <span className="commitee2">Important Dates</span>
              <span className="commitee2">Accomodation</span>
              <span className="commitee2">About Kerala</span>
              <span className="commitee2">Main Attraction</span>
              </div>
                        )}
          </li>
                <li className="menuitem">
                    <Link to="/about"className='link'>
                    <span className="menuItems">Registration</span>
                    </Link>
                </li>
                <li className="menuitem">
                    <Link to="/about"className='link'>
                    <span className="menuItems">Programme Shedule</span>
                    </Link>
                </li>
                <li className="menuitem">
                    <Link to="/about"className='link'>
                    <span className="menuItems">Contact Us</span>
                    </Link>
                </li>
            </ul>
          </div>
      </div>
    );
}

export default Navbar;
