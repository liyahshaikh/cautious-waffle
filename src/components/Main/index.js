import React from 'react'
import ScrollTopButton from '../ScrollTopButton'
import "./MainElements.css"
import {NavLink as Link} from "react-router-dom"
import Footer from '../Footer'


const Main = () => {
    return (
        <div className="main-container">
            <div className="semicircle__left"></div>
            <div className="main__whoWeAre">
                
                <p className="main__title">
                    WHO WE ARE
                </p>
                <p className="main__whoWeAreContent">
                Driven by the idea of Artistic Integrity, BYOND Entertainment is a 360 degree
                     music-based production company cum record label that promises the most creative ride to our
                     artists and consumers. We aim to bring artists together through talent hunts,
                      train them to be a better version of themselves and launch them as a group under our label.
                </p>
                <Link className="main__profileLink" to="/company-profile">Company Profile</Link>
            

            </div>
            <div className="main__whatWeDo">
                <p className="main__title">WHAT WE DO</p>
                <div className="whatWeDo__content">
                <div className="main__whatWeDo1">
                    <p className="whatWeDoTitle">
                    Album Planning / <br/>In house Production
                    </p>
                    <p className="whatWeDoMain">
                    Label Album planning, broadcast music production
                    and distribution, product development and licensing buisness using merchandising artist portrait rights for artists.
                    </p>
                </div>
                <div className="main__whatWeDo2">
                    <p className="whatWeDoTitle">Artist Development</p>
                    <p className="whatWeDoMain">Artist training, welfare/management, and branding development.</p>
                </div>
                <div className="main__whatWeDo3">
                    <p className="whatWeDoTitle">Social Welfare</p>
                    <p className="whatWeDoMain">Collaboration on CSR and society welfare, awareness projects/programs.</p>
                </div>
                <div className="main__whatWeDo4">
                <p className="whatWeDoTitle">Additional Business</p>
                    <p className="whatWeDoMain">Artist and album promotion, concert planning/management, fan meeting, external artist performance planning/management.</p>

                </div>
                </div>
            </div>
            <div className="semicircle__right"></div>
            <div className="main__video">
            <iframe src='https://drive.google.com/file/d/1-D2UpD8RP7vY9H39q36D_iBeYfBEP3tf/preview?autoplay=1'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                />
            </div>
            <div className="main__ourValuesSection">
                    <p className="main__title">OUR VALUES</p>
                    <div className="ourValues__content">
                        <div className="ourValues__content1">
                                <div className="ourValues__contentTitle">
                                Passion: </div>
                                <div className="ourValues__contentMain">
                                Every great dream begins with a driving force that gives us a reason 
                    to do what we love to do. We, as a company, value and welcome all passionate dreamers.
                                </div>
                        </div>
                        <div className="ourValues__content2">
                                <div className="ourValues__contentTitle">Empathy: </div>
                                <div className="ourValues__contentMain">
                                    Every piece of music that was ever created conveyed our stories through the artist.
                                    We at BYOND Entertainment believe in telling stories of you and me through our music.
                                 </div>
                        </div>
                        <div className="ourValues__content3">
                        <div className="ourValues__contentTitle">Diversity: </div>
                                <div className="ourValues__contentMain">Including what is both familiar and different is what makes us grow as an individual.
                 We celebrate the unity of our music and people through its diversity.</div>
                        </div>
                        <div className="ourValues__content4">
                        <div className="ourValues__contentTitle">Innovation:</div>
                                <div className="ourValues__contentMain">The only change that remains constant is change itself. And therefore, we focus
                 and emphasize continuous innovation and improvement in music and artist management.</div>
                        </div>
                    </div>
            </div>
            
            <div className="main__ourTeamSection">
                <p className="main__title">
                    OUR TEAM
                </p>
                <div className="ourTeam__content">
                <div className="ourTeam__text">
                When played together, a group of different notes makes a beautiful melody, every artist has their creative way of expression, and we, 
                    at BYOND Entertainment, admire individuality. We provide a space for independent expression and personal growth, for better teamwork. 
                    Hence, artists are free to experiment with what they are good at and get their due artistic rights.
                </div>
                
                <button type="button" class="btn-apply-now"><strong>APPLY NOW</strong></button>
                </div>
            </div>
            <Footer />
            <ScrollTopButton/>
            


        </div>

    )
}

export default Main
