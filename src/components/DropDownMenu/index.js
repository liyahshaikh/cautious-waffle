import React from 'react'
import {useRef, useState, useEffect} from 'react';
import "./DropDownMenuElements.css"
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
                <MenuIcon size="large" style={{color: "#ffffff", backgroundColor:'transparent',paddingTop: "18px", paddingLeft: "15px"}}></MenuIcon>
                </IconButton>
        
      </div>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">NEWS AND NOTICE</a></li>
          <li><a href="/">AUDITION</a></li>
        </ul>
      </nav>
    </div>
    )
}

export default DropDownMenu
