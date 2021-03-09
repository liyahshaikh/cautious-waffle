import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';


 export const Nav = styled.nav`

 background: #000;
 height:140px;
 display: flex;
 
 
 font-weight: 700;
 @media only screen and (max-width: 400px){
     height: 50px;
 }


 `
 export const Img= styled.img`
 height: 27%;
width: 11%;
padding-left: 20px;
padding-top: 4%;
align-self: left;

@media only screen and (max-width: 400px){
    width: 30%;
    height: 50%;
    padding-top: 13px;
}

 `
 export const NavLink= styled(Link)`
    
    
    color: #f2f2f2;
    text-align: center;
    font-weight: 400;
    opacity: 0.8;
    text-decoration: none;
    font-size: 17px;
    margin-left: 12px;
    padding-left: 12px;
    padding-right: 12px;
    height: 30px;

    @media only screen and (max-width: 400px){
        visibility: hidden;
    }

  
    
 
 `

 
 
 