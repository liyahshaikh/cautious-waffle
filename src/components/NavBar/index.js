import React from 'react'
import DropDownMenu from '../DropDownMenu'
import {NavLink as Link} from "react-router-dom"
import "./Navbar.css"
function NavBar() {
    return (
        <div className="header">
            <img src="WHITELOGO.png" alt="BYOND LOGO" className="header__logo"/>
            <div className="header__nav">
                <div className="header__options">
                    <Link className="header__link" to="/">About Us</Link>
                </div>
                <div className="header__options">
                    <Link className="header__link" to="/artists">Artists</Link>
                    </div>
                <div className="header__options"><Link className="header__link" to="/">Recruit</Link></div>
                <div className="header__options"><Link className="header__link" to="/">Audition</Link></div>
              
                </div>
                <div className="header__dropdown">
                    <DropDownMenu/>
                </div>
            
            
        </div>
    )
}

export default NavBar
