import React from 'react';
import './ommegpage.css';

const OmMegPage: React.FC = () => {
    return (
        <div className="om-meg-container">
            <img className="om-meg-image" src="CoachingMedJanneBack.png" />
            <div className="om-meg-text-container">
                <div className="om-meg-title">Hva kan du forvente av meg som coach?</div>
                <div className="om-meg-text">
                    Med meg som coach får du en lyttende, realistisk og ærlig coach. Hos meg er det viktig at vi skaper
                    et trygt rom hvor du kan fortelle hvordan du har det og hva du føler på.
                    <br />
                    <br />
                    Jeg er interessert og nysgjerrig på deg for å vite når du trenger å motiveres, bli roset, støttet
                    eller pushet. Jeg tar meg tid til deg, og alle treningsøkter og matplaner er skreddersydd til deg
                    for at det skal passe deg og din hverdag.
                </div>
                <br />
                <div className="om-meg-title">Hvorfor velge akkurat meg?</div>
                <div className="om-meg-text">
                    Gjennom egne erfaringer har jeg selv møtt på utfordringer gjennom min treningsreise. Det gjør det
                    lettere for meg å relatere til deg, vite hvordan jeg skal motivere deg og hva som skal til for deg å
                    nå målene dine.
                    <br />
                    <br />
                    Mitt mål er at du skal nå dine mål og forstå hvordan fysisk og mental helse henger sammen. Jeg er
                    opptatt av at vi skal lage en varig livvstil som gir deg energi, glede og resultater.
                </div>
                <br />
                <div className="om-meg-title">Utdanning og erfaring</div>
                <div className="om-meg-text">
                    Jeg er utdannet personlig trener og coach gjennom AFPT, og har jobbet som fysisk PT på Sats i ett år
                    hvor jeg har hjulpet mange fine mennesker med deres individuelle mål.
                    <br />
                    <br />Å ha jobbet som fysisk PT har gitt meg bred erfaring innen tilrettelegging til ulike nivå og
                    forståelse av eventuelle utfordringer som oppstår underveis.
                </div>
            </div>
        </div>
    );
};

export default OmMegPage;
