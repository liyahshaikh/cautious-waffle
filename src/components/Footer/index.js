import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer__container">
        
            <div className="footer__iconSection">
            <IconButton >
                <InstagramIcon onClick={() => window.open("https://www.instagram.com/byondentertainment_/")} size="large" style={{color: '#000000', size:"5x"}}></InstagramIcon>
            </IconButton>
            <IconButton >
                <YouTubeIcon  onClick={() => window.open("https://www.youtube.com/channel/UC5XBKvqOGrd3irOG44NJDQA")} size="large" style={{color: '#000000', size:"5x"}}></YouTubeIcon>
            </IconButton >
            <IconButton >
                <FacebookIcon onClick={() => window.open("https://m.facebook.com/BYOND-Entertainment-102270881967076/?ref=bookmarks")} size="large" style={{color: '#000000', size:"5x"}}></FacebookIcon>
            </IconButton>
            <IconButton>
                <TwitterIcon onClick={() => window.open("https://twitter.com/BYONDEntertain1?s=08")} size="large" style={{color: '#000000', size:"5x"}}></TwitterIcon>
            </IconButton>
            <IconButton >
                <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/byond-entertainment-9a3a47209/")} size="large" style={{color: '#000000', size:"5x"}}></LinkedInIcon>
            </IconButton>
            </div>
            <div className="footer__copywriteSection">
                <p>
                    
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made with  <FavoriteIcon size="small" /> by <a href="https://github.com/liyahshaikh" target="_blank" style={{color: '#000000'}}> Aliya Shaikh</a>
                </p>
                </div>
            </div>
    )
}

export default Footer
