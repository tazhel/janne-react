import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './header.css';

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('');

    // Function to handle scroll and update the active tab based on section visibility
    useEffect(() => {
        const sections = document.querySelectorAll('[id]');
        const onScroll = () => {
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveTab(`#${section.id}`); // Set active tab based on section id
                }
            });
        };

        // Adding scroll event listener
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Scroll to section when button clicked
    const handleTabClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(`#${id}`);
    };

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-button-container">
                    <button
                        className={`header-button ${activeTab === '#mine-tjenester' ? 'active' : ''}`}
                        onClick={() => handleTabClick('mine-tjenester')}
                    >
                        <Typography variant="overline">MINE TJENESTER</Typography>
                    </button>
                    <button
                        className={`header-button ${activeTab === '#om-meg' ? 'active' : ''}`}
                        onClick={() => handleTabClick('om-meg')}
                    >
                        <Typography variant="overline">OM MEG</Typography>
                    </button>
                    <button
                        className={`header-button ${activeTab === '#kundeanmeldelser' ? 'active' : ''}`}
                        onClick={() => handleTabClick('kundeanmeldelser')}
                    >
                        <Typography variant="overline">KUNDEANMELDELSER</Typography>
                    </button>
                    <button
                        className={`header-button ${activeTab === '#kontakt' ? 'active' : ''}`}
                        onClick={() => handleTabClick('kontakt')}
                    >
                        <Typography variant="overline">KONTAKT</Typography>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
