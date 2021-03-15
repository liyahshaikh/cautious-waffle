

import Hero from '../Hero'
import {SemiCircleRight} from "../Main/MainElements"
import { ArtistContent, ArtistTitle, Footer2 } from './ArtistsElements'
import FooterArtist from './FooterArtist'


function Artists() {
    return (
        <div style={{margin: '0', padding: '0'}}>
            
            <Hero>
                
            </Hero>
            
            <SemiCircleRight style={{top: "12vw, paddingBottom: 0"}} />
               
                    
                        <ArtistTitle>
                            ARTIST RECRUITMENT
                        </ArtistTitle>
                        <ArtistContent>
                            <div className="textMain">We look for potential candidates who share a passion for music and excel 
                in Singing/Rapping/Dancing/Production, and Songwriting. Besides having a command 
                over the above-mentioned skills, the candidates should also have a good network and socializing skills. 
                BYOND Entertainment does not look for the best talent, but the best fit.</div>
                            <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                />
                        </ArtistContent>

                    
                <ArtistTitle style={{top: '200vh'}}>
                ARTIST DEVELOPMENT
                </ArtistTitle>
                <ArtistContent style={{top: '220vh'}}>
                    <div className="textMain" style={{paddingTop: '32vh'}} >
                    The company believes in creating next-generation artists who can inspire, influence and impact lives through their music.
                 They will be trained under talented professionals and put through several fun tasks that can help them develop their craft and skills, shape their career 
                 and personality in the music industry.
                    </div>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                    style={{paddingTop: '30vh'}}
                />
                    
                </ArtistContent>
                <ArtistTitle style={{top: '320vh'}}>
                ARTIST MANAGEMENT
                </ArtistTitle>
                <ArtistContent style={{top: '340vh'}}>
                    <div className="textMain" style={{paddingTop: '32vh'}} >
                    BYOND Entertainment believes in creating meaningful and long-term relationships with its artists. 
                The company takes care of personal branding, album creation and promotion, record releases and tours, overall artist marketing and merchandising, 
                concert planning, and performance management.
                    </div>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                    style={{paddingTop: '30vh'}}
                />
                
                    
                </ArtistContent>
               <FooterArtist />
                
                    
                

            
        </div>
    )
}

export default Artists
