import React, { useEffect, useState } from 'react';
import IsMobile from '../hooks/IsMobile';
import './hjempage.css';

const HjemPage: React.FC = () => {
    const isMobile = IsMobile();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeInAndOut = (scrollY: number) => {
        const fadeDistance = 1000; // Adjust based on scroll distance
        const fade = scrollY / fadeDistance; // Remove Math.min to allow values greater than 1
        console.log(fade);
        return fade;
    };

    const fade = fadeInAndOut(scrollY);

    const handleClick = (id: string) => {
        //TODO change to real form
        window.open('https://form.jotform.com/242323185234046', '_blank');
        console.log(id);
        // document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <div className="home-left">
                <img className="home-logo" src="CoachingLogo.svg" alt="Logo" />
                <div className="home-title">
                    Jeg vil hjelpe deg med å nå dine mål <br />
                    og vise hvor mye du får inkludert i reisen
                </div>
                <div className="home-text">
                    Jeg hjelper deg på veien mot å bli den sterkeste versjonen av deg selv. Jeg brenner for å vise
                    sammenhengen mellom <span className="home-color">fysisk</span> og{' '}
                    <span className="home-color">mental helse</span>, og jeg hjelper deg til å finne en balanse hvor du
                    ikke blir for streng med deg selv, men heller ikke sklir ut av de gode rutinene.
                </div>
                <button className="home-button" onClick={() => handleClick('kontakt')}>
                    Kom i gang
                </button>
            </div>
            {isMobile ? (
                <>
                    <img
                        src="CoachingMedJanneAlone.png"
                        alt="CoachingMedJanneAlone"
                        className="coaching-image-alone"
                        style={{
                            opacity: 1 - fade * 2,
                            transform: `translateX(40%)`,
                        }}
                    />
                </>
            ) : (
                <>
                    <img
                        src="CoachingLogo.png"
                        alt="Logo"
                        className="coaching-logo"
                        style={{
                            transform: `translateX(${fade > 1 ? -100 : -fade * 100}%) translateY(-${fade > 1 ? (fade - 1) * 100 : 0}%)`,
                        }}
                    />

                    <img
                        src="CoachingMedJanne.png"
                        alt="CoachingMedJanne"
                        className="coaching-image"
                        style={{
                            opacity: 1 - fade,
                            transform: `translateY(-${fade > 1 ? (fade - 1) * 100 : 0}%)`,
                        }}
                    />
                    <img
                        src="CoachingMedJanneAlone.png"
                        alt="CoachingMedJanneAlone"
                        className="coaching-image-alone"
                        style={{
                            opacity: 1.8 - fade,
                            transform: `translateY(-${fade > 1 ? (fade - 1) * 100 : 0}%)`,
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default HjemPage;
