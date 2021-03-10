import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';


 export const Nav = styled.nav`

 background: transparent;
 height:140px;
 display: flex;
 
 
 font-weight: 700;


 `
 export const Img= styled.img`
 height: 30%;
width: 11%;
padding-left: 20px;
padding-top: 4%;
align-self: left;



 `
 export const NavLink= styled(Link)`
    
    font-family: NexaLight;
    color: #f2f2f2;
    text-align: center;
    justify-self: space-around;
    opacity: 0.8;
    text-decoration: none;
    font-size: 17px;
    margin-left: 12px;
    padding-left: 12px;
    padding-right: 12px;
    height: 30px;

    @media only screen and (max-width: 500px){
        visibility: hidden;
    }

`


 
 
 