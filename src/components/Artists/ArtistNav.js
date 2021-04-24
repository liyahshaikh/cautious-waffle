import React from 'react'

import DropDownMenu from '../DropDownMenu'
import {NavLink as Link} from "react-router-dom"
import "./ArtistNav.css"

function ArtistNav() {
    return (
   
            <div className="artist__header">
            <img src="BLACKLOGO.png" alt="BYOND LOGO" className="artist__header__logo"/>
            <div className="artist__header__nav">
                <div className="artist__header__options">
                    <Link className="artist__header__link" to="/">About Us</Link>
                </div>
                <div className="artist__header__options">
                    <Link className="artist__header__link" to="/artists">Artists</Link>
                    </div>
                <div className="artist__header__options"><Link className="artist__header__link" to="/">Recruit</Link></div>
                <div className="artist__header__options"><Link className="artist__header__link" to="/">Audition</Link></div>
              
                </div>
                <div className="artist__header__dropdown">
                    <DropDownMenu title="artists" />
                </div>
            
            
        </div>
            
        
    )
}

export default ArtistNav
