import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-line" />
            <div className="footer-text-container">
                <div className="footer-text">
                    <a href="https://www.instagram.com/janninh/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-image" src="/Instagram.svg" />
                    </a>
                    <a href="https://www.tiktok.com/@janne.nordin" target="_blank" rel="noopener noreferrer">
                        <img className="footer-image" src="/TikTok.svg" />
                    </a>
                    <div>Janne Nordin</div>
                </div>
                <div className="footer-text">
                    Coach Janne Nordin
                    <br />
                    Org: 933 293 351
                </div>
            </div>
        </div>
    );
};

export default Footer;
