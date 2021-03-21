import React from 'react'
import {useRef, useState, useEffect} from 'react';
import "./DropDownMenuElements.css"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {NavLink as Link} from "react-router-dom"
const DropDownMenu = () => {
    const dropdownRef= useRef(null);
    const [isActive, setIsActive]= useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
              }
            };
          
          if (isActive) {
            window.addEventListener('click', pageClickEvent);
          }
          return () => {
            window.removeEventListener('click', pageClickEvent);
          }

    }, [isActive]);
  
    

    return (
        <div className="menu-container">
      <div onClick={onClick} className="menu-trigger">
      <IconButton to="/">
                <MenuIcon size="large" style={{ position: "absolute",color: "#ffffff", backgroundColor:'transparent',paddingTop: "50px", paddingLeft: "20px", width:'5vw'}}></MenuIcon>
                </IconButton>
        
      </div>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li className="hidden"><Link to="/">About Us</Link></li>
          <li className="hidden"><Link to="/artists">Artists</Link></li>
          <li className="hidden"><a href="/">Recruit</a></li>
          <li className="hidden"><a href="/">Audition</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">NEWS AND NOTICE</a></li>
          <li><a href="/">AUDITION</a></li>
          
        </ul>
      </nav>
    </div>
    )
}

export default DropDownMenu
