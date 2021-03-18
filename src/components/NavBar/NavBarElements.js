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

display: flex;

 `
 export const NavLink= styled(Link)`
    display: flex;

    font-family: NexaLight;
    color: #fff;
    text-align: center;
    align-self: left;
    opacity: 0.8;
    text-decoration: none;
    font-size: 17px;
    margin-left: 10px;
    padding-left: 12px;
    padding-right: 14px;
    height: 30px;

    

`


 
 
 