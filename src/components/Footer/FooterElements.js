import styled from 'styled-components';
import {device} from '../device'
export const FooterContent = styled.footer`
margin-top: 50px;
border-top: 1px solid #f2f2f2;
background-color: transparent;
color: #000000;
position: absolute;

width: 100%;
height: 8rem; 
z-index: 100;


@media ${device.mobileL} {
    top: 530vmax;
    width: 100%;
    padding: 0;
}


`

export const IconSection = styled.div`
padding: 15vh;
text-align: center;
padding-left: 32vw;
width: 40vw;
align: center;
padding-bottom: 0vh;
display: flex;
justify-content: space-around;
`
export const CopyRightContent = styled.div`
font-family: NexaLight;
text-align: center;
position: absolute;
padding: 15vh;
padding-left: 32vw;
padding-bottom: 7vw;
font-size: 15px;


`