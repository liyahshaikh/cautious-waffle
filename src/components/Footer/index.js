import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CopyRightContent, FooterContent, IconSection } from './FooterElements';

const Footer = () => {
    return (
        <FooterContent>
            <IconSection>
            
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
            </IconSection>
            <CopyRightContent>
                <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made with  <FavoriteIcon size="small" /> by <a href="https://github.com/liyahshaikh" target="_blank" style={{color: '#000000'}}> Aliya Shaikh</a>
                </p>
            </CopyRightContent>
            
        </FooterContent>
    )
}

export default Footer
