import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CoachJanneLogo from '../Icons/CoachJanneLogo.svg';
import CoachJanneLogoLight from '../Icons/CoachJanneLogoLight.svg';
import '../global.css';
import { useThemeMode } from '../hooks/Helpers';
import IsMobile from '../hooks/IsMobile';

const Header: React.FC = () => {
    const isMobile = IsMobile();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);
    const { theme } = useThemeMode();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTabClick = (path: string) => {
        setActiveTab(path);
    };

    const handleMenuItemClick = (path: string) => {
        setActiveTab(path);
        handleClose();
        console.log(activeTab);
    };

    const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
        if (!anchorEl || anchorEl.contains(event.target as HTMLElement)) {
            return;
        }
        handleClose();
    };

    return (
        <div className="header-container">
            <div className="header-content-mobile">
                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            id="basic-button"
                            aria-controls={anchorEl ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={anchorEl ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            onClick={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem
                                component={Link}
                                to="/"
                                onClick={() => handleMenuItemClick('/')}
                                selected={activeTab === '/'}
                            >
                                Hjem
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/min-reise"
                                onClick={() => handleMenuItemClick('/min-reise')}
                                selected={activeTab === '/min-reise'}
                            >
                                Min reise
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/kontakt-meg"
                                onClick={() => handleMenuItemClick('/kontakt-meg')}
                                selected={activeTab === '/kontakt-meg'}
                            >
                                Kontakt meg
                            </MenuItem>
                        </Menu>
                        <Link to="/" className="header-logo-mobile" onClick={() => handleTabClick('/')}>
                            <img
                                className="header-logo-mobile"
                                src={theme === 'light' ? CoachJanneLogoLight : CoachJanneLogo}
                                alt="Logo"
                            />
                        </Link>
                        <Button href="https://zenfit.io" className="header-link-mobile" variant="contained">
                            Kom i gang
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/" className="header-logo" onClick={() => handleTabClick('/')}>
                            <img
                                className="header-logo"
                                src={theme === 'light' ? CoachJanneLogoLight : CoachJanneLogo}
                                alt="Logo"
                            />
                        </Link>
                        <div className="header-button-container">
                            <Link
                                to="/"
                                className={`header-button ${activeTab === '/' ? 'active' : ''}`}
                                onClick={() => handleTabClick('/')}
                            >
                                <Typography variant="h6">Hjem</Typography>
                            </Link>
                            <Link
                                to="/min-reise"
                                className={`header-button ${activeTab === '/min-reise' ? 'active' : ''}`}
                                onClick={() => handleTabClick('/min-reise')}
                            >
                                <Typography variant="h6">Min reise</Typography>
                            </Link>
                            <Link
                                to="/kontakt-meg"
                                className={`header-button ${activeTab === '/kontakt-meg' ? 'active' : ''}`}
                                onClick={() => handleTabClick('/kontakt-meg')}
                            >
                                <Typography variant="h6">Kontakt meg</Typography>
                            </Link>
                            <Button href="https://zenfit.io" className="header-link" variant="contained">
                                Kom i gang
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
