import React from 'react'
import NavBar from '../NavBar'
import {HeroContainer, HeroContent, HeroItems,HeroH1,HeroP} from "./HeroElements"

const Hero = () => {
    return (
        <HeroContainer>
            <NavBar style={{zIndex: 100}} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Experience. Evolve. Inspire.</HeroH1>
                    <HeroP><strong style={{fontFamily: "NexaBold"}}>BYOND</strong> Entertainment</HeroP>
                </HeroItems>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
