import React from 'react'
import DropDownMenu from '../DropDownMenu'

import {Nav, Img, NavLink} from "./NavBarElements"

const NavBar = () => {
    
    return (
        <>
            <Nav>
                
                <Img src="WHITELOGO.png"></Img>
                <div style={{paddingLeft: "42vw", paddingTop: "5%", display:'flex'}}>
                <NavLink to="/">About us</NavLink>
                <NavLink to="/artists">Artists</NavLink>
                <NavLink to="/">Recruit</NavLink>
                <NavLink to="/">Audition</NavLink>
                <NavLink to="/" style={{paddingLeft: "10%"}}>ENG</NavLink>
                </div>
                <DropDownMenu/>

            </Nav>
        </>
    )
}

export default NavBar
