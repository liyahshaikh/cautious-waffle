import React from 'react'
import Footer from '../Footer'
import { MainContainer, OurValuesSection, OurValuesContent, MainP, MainSection1, MainSection2, MainSection3, MainSection4,  MainTitle, ProfileButton, SemiCircleLeft, SemiCircleRight, Title1, Title2, Title3, Title4,  WhatWeDoSection, WhatWeDoSectionContent1, WhatWeDoSectionContent2,WhatWeDoSectionContent3,WhatWeDoSectionContent4, OurValuesTitle, OurValuesP, OurTeamContent } from './MainElements'

const Main = () => {
    return (
        <MainContainer>
            <SemiCircleLeft>
                <MainTitle>WHO WE ARE</MainTitle>
                <MainP>Driven by the idea of Artistic Integrity, BYOND Entertainment is a 360 degree based
                     music-based company cum record label that promises the most creativeride to our
                     artists and consumers. We aim to bring artists together through talent hunts,
                      train them to be a better version of themselves and launch them as a group under our label.
                </MainP>
                <ProfileButton to="/">Company Profile</ProfileButton>
                <MainTitle style={{textAlign: 'center', top: '75vh', left: '16vw', width: '100%'}}>WHAT WE DO</MainTitle>
                <WhatWeDoSection>
                    <WhatWeDoSectionContent1>
                        <Title1>Album Planning and In house Production</Title1>
                        <MainSection1>Label Album planning, broadcast music production
                            and distribution, product development and licensing buisness using merchandising artist portrait rights for artists.
                        </MainSection1>
                    </WhatWeDoSectionContent1>
                    <WhatWeDoSectionContent2>
                        <Title2>Artist Development</Title2>
                        <MainSection2>
                        Artist training, welfare/management, and branding development.
                        </MainSection2>
                    </WhatWeDoSectionContent2>
                    <WhatWeDoSectionContent3>
                        <Title3>Social Welfare</Title3>
                        <MainSection3>
                            Boration on CSR and society welfare, awareness projects/programs.
                        </MainSection3>
                    </WhatWeDoSectionContent3>
                    <WhatWeDoSectionContent4>
                        <Title4>Additional Business</Title4>
                        <MainSection4>
                            Artist and album promotion, concert planning/management, fan meeting, external artist performance planning/management.
                        </MainSection4>
                    </WhatWeDoSectionContent4>

                </WhatWeDoSection>

                
            </SemiCircleLeft>
            <SemiCircleRight>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' style={{position: 'absolute', alignSelf: 'center', right: '26vw', top: '40vh', width:'50vw', height: '35vw', paddingTop:'50px', zIndex: '100'}}
                />
                <OurValuesSection>
                    <OurValuesContent>
                            <OurValuesTitle>OUR VALUES</OurValuesTitle>
                            <OurValuesP>
                            <div className="1" style={{display:'flex' , justifyContent: 'space-evenly' , paddingBottom: '5vh'}} >
                                <div className="title">
                                Passion: 
                                </div>
                                <div className="main">
                                Every great dream begins with a driving force that gives us a reason 
                    to do what we love to do. We, as a company, value and welcome all passionate dreamers.
                                </div>
                            </div>
                            <div className="2" style={{display:'flex' , justifyContent: 'space-evenly' , paddingBottom: '5vh'}}>
                                <div className="title">Empathy: </div>
                                <div className="main">Every piece of music that was ever created conveyed our stories through the artist.
                 We at BEYOND Entertainment believe in telling stories of you and me through our music.</div>
                            </div>
                            <div className="3" style={{display:'flex' , justifyContent: 'space-evenly' , paddingBottom: '5vh'}}>
                                <div className="title">Diversity: </div>
                                <div className="main">Including what is both familiar and different is what makes us grow as an individual.
                 We celebrate the unity of our music and people through its diversity.</div>
                            </div>
                            <div className="4" style={{display:'flex' , justifyContent: 'space-evenly' , paddingBottom: '5vh'}}>
                                <div className="title">Innovation:</div>
                                <div className="main">The only change that remains constant is change itself. And therefore, we focus
                 and emphasize continuous innovation and improvement in music and artist management.</div>
                            </div>

                            
                 </OurValuesP>

                        
                    </OurValuesContent>
                </OurValuesSection>

            </SemiCircleRight>
            <SemiCircleLeft style={{ position: 'relative', top: '200vh', zIndex:'-12'}}>
                <OurTeamContent>
                <div class="our-team">
                <div class="our-team-text">
                <p class="head">OUR TEAM</p>
                <p>When played together, a group of different notes makes a beautiful melody, every artist has their creative way of expression, and we, 
                    at BYOND Entertainments, admire individuality. We provide a space for independent expression and personal growth, for better teamwork. 
                    Hence, artists are free to experiment with what they are good at and get their due artistic rights.
                </p>
            </div>
                <button type="button" class="btn-apply-now"><strong>APPLY NOW</strong></button>

            </div>

                </OurTeamContent>

            </SemiCircleLeft>

            <Footer />
            
        </MainContainer>

    )
}

export default Main
