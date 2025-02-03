import React, { useEffect, useState } from 'react';
import Is1700 from '../hooks/Is1700';
import IsMobile from '../hooks/IsMobile';
import './hjempage.css';

const HjemPage: React.FC = () => {
    const isMobile = IsMobile();
    const is1700 = Is1700();
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
        return fade;
    };

    const fade = fadeInAndOut(scrollY);

    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="home-container">
                {isMobile ? (
                    <div className="home-left">
                        <img className="home-logo" src="CoachingLogo.svg" alt="Logo" />
                        <div className="home-title">Jeg vil vise hvor mye du får inkludert i reisen mot dine mål</div>
                        <div className="home-text">
                            Jeg brenner for å vise sammenhengen mellom <span className="home-color">fysisk</span> og{' '}
                            <span className="home-color">mental helse</span>, og jeg hjelper deg til å finne en balanse
                            hvor du ikke blir for streng med deg selv, men heller ikke sklir ut av de gode rutinene.
                        </div>
                        <button className="home-button" onClick={() => handleClick('kontakt')}>
                            Kom i gang
                        </button>
                    </div>
                ) : (
                    <div className="home-left">
                        <img className="home-logo" src="CoachingLogo.svg" alt="Logo" />
                        <div className="home-title">Jeg vil vise hvor mye du får inkludert i reisen mot dine mål</div>
                        <div className="home-text">
                            Jeg brenner for å vise sammenhengen mellom <span className="home-color">fysisk</span> og{' '}
                            <span className="home-color">mental helse</span>, og jeg hjelper deg til å finne en balanse
                            hvor du ikke blir for streng med deg selv, men heller ikke sklir ut av de gode rutinene.
                        </div>
                        <button className="home-button" onClick={() => handleClick('kontakt')}>
                            Kom i gang
                        </button>
                    </div>
                )}
                {isMobile ? (
                    <>
                        <img
                            src="CoachingMedJanneAlone.png"
                            alt="CoachingMedJanneAlone"
                            className="coaching-image-alone"
                            style={{
                                opacity: 1 - fade * 4,
                                display: fade >= 0.5 ? 'none' : 'block',
                                transform: `translateX(40%)`,
                                zIndex: 0,
                            }}
                        />
                    </>
                ) : (
                    <>
                        <img
                            src="CoachingLogo.png"
                            alt="Logo"
                            className="coaching-logo"
                            style={
                                is1700
                                    ? { display: 'none' }
                                    : {
                                          transform: `translateX(${fade > 1 ? -50 : -fade * 50}vw) translateY(-${fade < 1 ? 0 : scrollY - 1000}px)`,
                                      }
                            }
                        />

                        <img
                            src="CoachingMedJanne.png"
                            alt="CoachingMedJanne"
                            className="coaching-image"
                            style={
                                is1700
                                    ? { transform: `translateY(-${scrollY}px)` }
                                    : { opacity: 1 - fade, display: fade < 1 ? 'block' : 'none' }
                            }
                        />

                        <img
                            src="CoachingMedJanneAlone.png"
                            alt="CoachingMedJanneAlone"
                            className="coaching-image-alone"
                            style={
                                is1700
                                    ? { transform: `translateY(-${scrollY}px)` }
                                    : {
                                          opacity: 1.6 - fade,
                                          display: fade < 2 ? 'block' : 'none',
                                          transform: `translateY(-${fade < 1 ? 0 : scrollY - 1000}px)`,
                                          zIndex: 0,
                                      }
                            }
                        />
                    </>
                )}
            </div>
            {!is1700 && <div id="mine-tjenester" className="coaching-mine-tjenester"></div>}
        </>
    );
};

export default HjemPage;
