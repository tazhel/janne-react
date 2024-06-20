import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '40px',
                            fontSize: '40px',
                        }}
                    >
                        Under development
                    </div>
                    {/* <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/min-reise" element={<MyJourneyPage />} />
                        <Route path="/kontakt-meg" element={<ContactMePage />} />
                    </Routes> */}
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
