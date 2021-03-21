

import Footer from '../Footer'
import Hero from '../Hero'

import ScrollTopButton from '../ScrollTopButton'
import "./Artists.css"




function Artists() {
    return (
        <div>
            <Hero />
            <div className="artists__container">
                <div className="artists__content1">
                    <p className="artist__title">ARTIST RECRUITMENT</p>
                    <div className="artist__main">
                        <div className="artist__text">
                        We look for potential candidates who share a passion for music and excel 
                in Singing/Rapping/Dancing/Production, and Songwriting. Besides having a command 
                over the above-mentioned skills, the candidates should also have a good network and socializing skills. 
                BYOND Entertainment does not look for the best talent, but the best fit.
                        </div>
                        <div className="artist__video">
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                />
                        </div>
                    </div>
                </div>
                <div className="artists__content2">
                    <p className="artist__title">ARTIST DEVELOPMENT</p>
                    <div className="artist__main">
                        <div className="artist__text">The company believes in creating next-generation artists who can inspire, influence and impact lives through their music.
                 They will be trained under talented professionals and put through several fun tasks that can help them develop their craft and skills, shape their career 
                 and personality in the music industry.</div>
                        <div className="artist__video">
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                    
                />
                        </div>
                    </div>
                </div>
                <div className="artists__content3">
                    <p className="artist__title">ARTIST MANAGEMENT</p>
                    <div className="artist__main">
                        <div className="artist__text">BYOND Entertainment believes in creating meaningful and long-term relationships with its artists. 
                The company takes care of personal branding, album creation and promotion, record releases and tours, overall artist marketing and merchandising, 
                concert planning, and performance management.</div>
                        <div className="artist__video">
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video' 
                    
                />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <ScrollTopButton />
                
                    
                

            
        </div>
    )
}

export default Artists
