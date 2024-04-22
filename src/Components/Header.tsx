import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CoachJanneLogo from '../Icons/CoachJanneLogo.svg';
import '../global.css';

const Header: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    return (
        <div className="header-container">
            <div className="header-content">
                <Link to="/" className="header-logo" onClick={() => handleTabClick('/')}>
                    <img className="header-logo" src={CoachJanneLogo} alt="Logo" />
                </Link>
                <div className="header-button-container">
                    <Link
                        to="/"
                        className={`header-button ${activeTab === '/' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/')}
                    >
                        <Typography variant="body1">Hjem</Typography>
                    </Link>
                    <Link
                        to="/about"
                        className={`header-button ${activeTab === '/about' ? 'active' : ''}`}
                        onClick={() => handleTabClick('/about')}
                    >
                        <Typography variant="body1">Min Historie</Typography>
                    </Link>
                    <Button href="https://zenfit.io/no" className="header-link" variant="contained">
                        Kom i gang
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
