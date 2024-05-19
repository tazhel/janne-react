import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Features from '../Components/Features';
import '../global.css';
import { useThemeMode } from '../hooks/Helpers';
import IsMobile from '../hooks/IsMobile';

const HomePage: React.FC = () => {
    const isMobile = IsMobile();
    useThemeMode();

    return (
        <div>
            {!isMobile ? (
                <div className={'homepage-container'}>
                    <div className="homepage-video-container">
                        <video autoPlay muted loop className="homepage-video">
                            <source src="./CoachJannePromo1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="homepage-video-text">
                            <div className="homepage-text-big-outline">Opplev gleden av å trene</div>
                        </div>
                    </div>
                    <div className="homepage-air" />
                    <div className="homepage-content">
                        <div className="homepage-half-video-container">
                            <video autoPlay muted loop className="homepage-half-video">
                                <source src="./CoachJannePromo2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="homepage-half-text">
                            <div className="homepage-text-big">Holder deg motivert</div>
                            <div className="homepage-text-medium">
                                Målet mitt vil alltid være å holde deg motivert og la treningen hjelpe deg både fysisk
                                og psykisk
                            </div>
                        </div>
                    </div>
                    <div className="homepage-air" />
                    <Features />
                    <div className="homepage-air" />
                </div>
            ) : (
                <Swiper direction={'vertical'} pagination={true} style={{ height: 'calc(100vh - 80px)' }}>
                    <SwiperSlide>
                        <div className="homepage-video-container">
                            <video autoPlay muted loop className="homepage-video">
                                <source src="./CoachJannePromo1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="homepage-video-text">
                                <div className="homepage-text-big-outline">Opplev gleden av å trene</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="homepage-content">
                            <div className="homepage-half-video-container">
                                <video autoPlay muted loop className="homepage-half-video">
                                    <source src="./CoachJannePromo2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="homepage-half-text">
                                <div className="homepage-text-big">Holder deg motivert</div>
                                <div className="homepage-text-medium">
                                    Målet mitt vil alltid være å holde deg motivert og la treningen hjelpe deg både
                                    fysisk og psykisk
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="features-image" src={'/FeatureEgenApp.webp'} alt="Egen app" />
                        <div className="features-text-container-mobile">
                            <div className="features-text-mobile">Egen app</div>
                            <div className="features-text-small">
                                Med Zenfit appen så kan jeg bruke tid på å lage programmet perfekt til deg, mens alt du
                                trenger kommer i appen
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="features-image" src={'/FeaturesTrening.jpg'} alt="Egen app" />
                        <div className="features-text-container-mobile">
                            <div className="features-text-mobile">Treningsplanlegger</div>
                            <div className="features-text-small">
                                Legger opp gode treningsplaner for deg, sammen finner vi det som passer deg best
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="features-image" src={'/FeaturesMåltid.jpg'} alt="Egen app" />
                        <div className="features-text-container-mobile">
                            <div className="features-text-mobile">Måltidsplanlegger</div>
                            <div className="features-text-small">
                                Med måltidplanlegging så vil treningen bli komplett
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="features-image" src={'/FeaturesRinge.jpg'} alt="Egen app" />
                        <div className="features-text-container-mobile">
                            <div className="features-text-mobile">Tekst og videochat</div>
                            <div className="features-text-small">
                                God kommunikasjon er viktig, ring eller chat om det er noe
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}
        </div>
    );
};

export default HomePage;
