import React from 'react';
import '../global.css';
import IsMobile from '../hooks/IsMobile';

const ContactMePage: React.FC = () => {
    const isMobile = IsMobile();
    return (
        <div>
            {!isMobile ? (
                <div className="homepage-content">
                    <div className="homepage-half-video-container">
                        <img className="myjourney-image-half" src={'/FeaturesMåltid.jpg'} alt="Egen app" />
                    </div>
                    <div className="homepage-half-text">
                        <div className="homepage-text-big">Hei</div>
                        <div className="homepage-text-medium">
                            Har du noen spørsmål om hvordan dette funker eller det er noe du er usikker på, så kan du
                            ringe meg her: 000 00 000
                        </div>
                        <div className="homepage-air" />
                        <div className="homepage-text-medium">
                            Er du allerede kunde så skjer alt i appen, kan både video chatte og melde meg der.
                        </div>
                    </div>
                </div>
            ) : (
                <div className="myjourney-container">
                    <div className="myjourney-title">Hei</div>
                    <div className="myjourney-content">
                        <div className="myjourney-text">
                            Har du noen spørsmål om hvordan dette funker eller det er noe du er usikker på, så kan du
                            ringe meg her: 000 00 000
                        </div>
                        <img className="myjourney-image" src={'/FeaturesMåltid.jpg'} alt="Egen app" />
                        <div className="myjourney-text">
                            Er du allerede kunde så skjer alt i appen, kan både video chatte og melde meg der.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactMePage;
