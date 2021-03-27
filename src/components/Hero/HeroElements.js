
import styled from 'styled-components'
import {device} from '../device'
export const HeroContainer = styled.div`
background-image: url("BlackVinyl.jpg");
background-size: cover;
height: 120vh;
width: 100%;

background-position: center;

line-height: 1.9;
@media ${device.mobileL}{
    height: 70vh;
}


`
export const HeroContent = styled.div`
`
export const HeroItems = styled.div`
`

export const HeroH1= styled.h1`
color: #fff;
padding: 20px;
font-family: NexaBold;
font-size: 5vw;
text-align: center;
padding-top: 80px;
word-spacing: 2vw;



`
export const HeroP = styled.p`
color: #fff;
font-family: NexaLight;
font-size: 2.5vw;
text-align: center;

padding-bottom: 20vh;

`