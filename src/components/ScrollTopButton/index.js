import React from 'react'
import {useEffect, useState} from "react";
import "./ScrollTopButtonElements.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
        window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);



    return (
        <div className="scroll-to-top">
        {isVisible && (
        <div onClick={scrollToTop}>
            <IconButton>
                <ArrowUpwardIcon size="large" color="black" style={{color:"black", width:'50px', height:"50px",paddingRight:'0px'}}/> 
                    
                
            </IconButton>
        </div>
      )}
    </div>

    )
}

export default ScrollTopButton
