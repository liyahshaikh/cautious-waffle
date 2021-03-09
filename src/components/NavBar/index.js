import React from 'react'

import {Nav, Img, NavLink} from "./NavBarElements"

const NavBar = () => {
    
    return (
        <>
            <Nav>
                
                <Img src="WHITELOGO.png"></Img>
                <div style={{paddingLeft: "40%", paddingTop: "5%"}}>
                <NavLink to="/">About us</NavLink>
                <NavLink to="/">Artists</NavLink>
                <NavLink to="/">Recruit</NavLink>
                <NavLink to="/">Auditon</NavLink>
                <NavLink to="/" style={{paddingLeft: "15%"}}>ENG</NavLink>
                </div>
                

            </Nav>
        </>
    )
}

export default NavBar
