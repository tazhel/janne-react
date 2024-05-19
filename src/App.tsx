import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ContactMePage from './Pages/ContactMePage';
import HomePage from './Pages/HomePage';
import MyJourneyPage from './Pages/MyJourneyPage';
import './global.css';
import { useThemeMode } from './hooks/Helpers';

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
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/min-reise" element={<MyJourneyPage />} />
                        <Route path="/kontakt-meg" element={<ContactMePage />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
