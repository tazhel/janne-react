import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import './global.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
