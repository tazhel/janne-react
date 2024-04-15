import React from 'react';
import './App.css';
import CoachJanneLogo from './Icons/CoachJanneLogo.svg';

const App: React.FC = () => {
    return (
        <>
            <div>
                <a href="https://www.tiktok.com/@jannenordiin" target="_blank" rel="noreferrer">
                    <img src={CoachJanneLogo} className="logo" />
                </a>
            </div>
            <h1>
                Finn meg på
                <a href="https://www.tiktok.com/@jannenordiin" target="_blank" rel="noreferrer">
                    {' '}
                    tiktok.com/@jannenordiin
                </a>
            </h1>
            <p className="read-the-docs">🚧Nettstedet er under konstruksjon🚧</p>
        </>
    );
};

export default App;
