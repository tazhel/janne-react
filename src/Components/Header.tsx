import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Is488 from '../hooks/Is488';
import './header.css';

const Header: React.FC = () => {
    const is488 = Is488();
    const [activeTab, setActiveTab] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleTabClick = (id: string) => {
        const sectionThresholds: Record<string, number> = {
            'mine-tjenester': 0.16935337801122985,
            'om-meg': 0.3282014127875385,
            kundeanmeldelser: 0.6238000362253215,
            kontakt: 0.980257199782648,
        };

        if (window.scrollY === sectionThresholds[id] && activeTab === `#${id}`) {
            setDropdownOpen(false);
            return;
        }

        if (activeTab === `#${id}`) {
            setDropdownOpen(false);
            return;
        }

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(`#${id}`);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const sections: Array<'mine-tjenester' | 'om-meg' | 'kundeanmeldelser' | 'kontakt'> = [
            'mine-tjenester',
            'om-meg',
            'kundeanmeldelser',
            'kontakt',
        ];

        const sectionThresholds: Record<'mine-tjenester' | 'om-meg' | 'kundeanmeldelser' | 'kontakt', number> = {
            'mine-tjenester': 0.16935337801122985,
            'om-meg': 0.3282014127875385,
            kundeanmeldelser: 0.6238000362253215,
            kontakt: 0.980257199782648,
        };

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            let found = false;
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top + scrollPosition;
                    const threshold =
                        sectionThresholds[sectionId as 'mine-tjenester' | 'om-meg' | 'kundeanmeldelser' | 'kontakt'];

                    // Check if the scroll position has crossed the threshold for each section
                    if (sectionTop <= scrollPosition + threshold * viewportHeight) {
                        setActiveTab(`#${sectionId}`);
                        found = true;
                    }
                }
            });

            if (!found) {
                setActiveTab('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-button-container">
                    {!is488 ? (
                        <>
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
                        </>
                    ) : (
                        <div className="custom-dropdown">
                            <div className="dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                {activeTab === '#mine-tjenester' && 'MINE TJENESTER'}
                                {activeTab === '#om-meg' && 'OM MEG'}
                                {activeTab === '#kundeanmeldelser' && 'KUNDEANMELDELSER'}
                                {activeTab === '#kontakt' && 'KONTAKT'}
                                {!activeTab && 'HJEM'}
                                <span className="arrow">{dropdownOpen ? '▴' : '▾'}</span>
                            </div>

                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-option" onClick={() => handleTabClick('mine-tjenester')}>
                                        MINE TJENESTER
                                    </div>
                                    <div className="dropdown-option" onClick={() => handleTabClick('om-meg')}>
                                        OM MEG
                                    </div>
                                    <div className="dropdown-option" onClick={() => handleTabClick('kundeanmeldelser')}>
                                        KUNDEANMELDELSER
                                    </div>
                                    <div className="dropdown-option" onClick={() => handleTabClick('kontakt')}>
                                        KONTAKT
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
