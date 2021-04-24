import React from 'react'
import NavBar from '../NavBar'
import {HeroContainer, HeroContent, HeroItems,HeroH1,HeroP} from "./HeroElements"

const Hero = ({title}) => {
    return (
        <HeroContainer>
            <NavBar />
            <HeroContent>
                <HeroItems>
                    <HeroH1 className="hero-h1">{title}</HeroH1>
                    <HeroP><strong style={{fontFamily: "NexaBold"}}>BYOND</strong> Entertainment</HeroP>
                </HeroItems>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
