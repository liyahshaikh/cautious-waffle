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
            <IconButton to="/">
                <InstagramIcon size="large" style={{color: '#000000', size:"5x"}}></InstagramIcon>
            </IconButton>
            <IconButton to="/">
                <YouTubeIcon size="large" style={{color: '#000000', size:"5x"}}></YouTubeIcon>
            </IconButton >
            <IconButton to="/">
                <FacebookIcon size="large" style={{color: '#000000', size:"5x"}}></FacebookIcon>
            </IconButton>
            <IconButton to="/">
                <TwitterIcon size="large" style={{color: '#000000', size:"5x"}}></TwitterIcon>
            </IconButton>
            <IconButton to="/">
                <LinkedInIcon size="large" style={{color: '#000000', size:"5x"}}></LinkedInIcon>
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
