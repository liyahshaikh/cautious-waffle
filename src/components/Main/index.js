import React from 'react'
import { MainContainer, MainP, MainSection1, MainSection2, MainSection3, MainSection4,  MainTitle, ProfileButton, SemiCircleLeft, SemiCircleRight, Title1, Title2, Title3, Title4,  WhatWeDoSection, WhatWeDoSectionContent1, WhatWeDoSectionContent2,WhatWeDoSectionContent3,WhatWeDoSectionContent4 } from './MainElements'

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
            <SemiCircleRight />
            
        </MainContainer>
    )
}

export default Main
