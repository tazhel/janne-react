import React from 'react';
import '../global.css';

const HomePage: React.FC = () => {
    return (
        <div>
            <video autoPlay muted loop className="homepage-video">
                <source src="./CoachJannePromo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
                        Målet mitt vil alltid være å holde deg motivert og la treningen hjelpe deg både fysisk og
                        psykisk
                    </div>
                </div>
            </div>
            <div className="homepage-air" />
        </div>
    );
};

export default HomePage;
