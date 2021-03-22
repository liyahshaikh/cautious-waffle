import React from 'react'
import "./ProfileElements.css"
import {NavLink as Link} from "react-router-dom"
import Footer from '../Footer'
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__bar">
                
                <div className="profile__back">
                    <Link to="/" className="profile__languageButton">BACK</Link>
                </div>
                <div className="profile__language">
                    <Link to="/company-profile" className="profile__languageButton">ENG</Link>
                    <Link to="/company-profile" className="profile__languageButton">HIN</Link>
                </div>
            </div>
            <div className="profile__header">
                <img src="https://see.fontimg.com/api/renderfont4/6YyZg/eyJyIjoiZnMiLCJoIjoxNTMsInciOjEwMDAsImZzIjoxNTMsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/QllPTkQ/punch.png" alt="" className="profile__headerLine"/>
                <p className="profile__headerLine2">ENTERTAINMENT</p>
            </div>
            <div className="profile__name">
                COMPANY PROFILE
            </div>
            <div className="profile__content1">
                <p className="profile__contentTitle">STORY</p>
                <p className="profile__contentMain">
                    Our Vision is to train and nurture young artists who would pave the way for a unique popular culture in India and expand it globally.
                    BYOND Entertainment also envisions to be the best music based production company and artist management platform through constant 
                    innovations in music, lifestyle and technology.
                </p>

            </div>
            <div className="profile__content2">
            <p className="profile__contentTitle">OUR VISION</p>
                <p className="profile__contentMain">
                Our Vision is to train and nurture young artists who would pave the way for a unique popular culture in India and expand it globally.
                    BYOND Entertainment also envisions to be the best music based production company and artist management platform through constant 
                    innovations in music, lifestyle and technology.
                </p>

            </div>
            <div className="profile__content3">
            <p className="profile__contentTitle">OUR MISSION</p>
                <p className="profile__contentMain">
                    Based on our mission of 'Experience, Evolve, Inspire,' we believe that our company would help both
                     our artists and our consumers in Experiencing the best in themselves, Evolving into better individuals, and Inspiring the world
                      through music. Apart from serving through music, we aim to collaborate in different Corporate Social Responsibily projects/programs
                      (environmental and philanthropic) for a better tomorrow.
                </p>

            </div>
            <div className="profile__backNavigationPanel">
                <div className="profile__backNavigationPanel1">
                    <Link to="/" className="nav__element1">BACK TO TOP</Link></div>
                <div className="profile__backNavigationPanel2">
                    <Link to="/" className="nav__element2">HOME</Link>
                </div>
                <div className="profile__backNavigationPanel3">
                    <Link to="/" className="nav__element3">
                        <p className="nav__element3Line1">APPLY NOW<p>(core team recruit)</p></p>
                        
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile
