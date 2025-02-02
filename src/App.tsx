import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Quote from './Components/Quote';
import './global.css';
import { useThemeMode } from './hooks/Helpers';
import HjemPage from './Pages/HjemPage';
import KontaktPage from './Pages/KontaktPage';
import KundeAnmeldelserPage from './Pages/KundeAnmeldelserPage';
import MineTjenesterPage from './Pages/MineTjenesterPage';
import OmMegPage from './Pages/OmMegPage';

const App: React.FC = () => {
    const { theme } = useThemeMode();
    const customTheme = createTheme({
        palette: {
            mode: theme,
            primary: {
                main: theme === 'light' ? '#323cfc' : '#646cff',
            },
        },
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <Header />
                <div className="page-container">
                    <HjemPage />
                    <div id="mine-tjenester" className="scroll-link-less" />
                    <MineTjenesterPage />
                    <div id="om-meg" className="scroll-link" />
                    <OmMegPage />
                    <div id="kundeanmeldelser" className="scroll-link" />
                    <KundeAnmeldelserPage />
                    <Quote />
                    <div id="kontakt" className="scroll-link" />
                    <KontaktPage />
                </div>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
