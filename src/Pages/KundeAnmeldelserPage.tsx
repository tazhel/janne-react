import React from 'react';
import './kundeanmeldelserpage.css';

const KundeAnmeldelserPage: React.FC = () => {
    return (
        <div className="kundeanmeldelser-container">
            <img className="om-meg-image" src="CoachingMedJanneSmiley.png" />
            <div>
                <div className="kundeanmeldelser-title">Emma Julie Bratli</div>
                <div className="kundeanmeldelser-text">
                    «I 12 uker hadde jeg gleden av å trene med Janne som PT, og jeg kan ikke anbefale henne nok! Hun var
                    dyktig og profesjonell i alt hun gjorde. Kunnskapen og engasjementet hennes for trening og
                    veiledning ga meg full tillit fra første møte. Som veileder var hun ikke bare teknisk dyktig, men
                    også en fantastisk støttespiller og motivator gjennom hele prosessen!
                    <br />
                    <br />
                    Takket være Janne opplevde jeg en mye større mestringsfølelse på trening, og ikke minst fant jeg
                    tilbake til treningsgleden. Hun klarte hele veien å tilpasse treningen til mine forutsetninger og
                    mål, og dette bidro til at jeg opplevde framgang og mer motivasjon! Jeg følte meg alltid sett og
                    hørt, noe som gjorde treningsøktene med Janne til noe jeg virkelig gledet meg til.
                    <br />
                    <br />
                    Om du er på jakt etter en PT som kan hjelpe deg med å nå dine mål, og som samtidig gjør treningen
                    gøy og givende, så anbefaler jeg Janne på det sterkeste❤️»
                </div>
                <br />
                <div className="kundeanmeldelser-title">Eva-Elisabeth Løbbel</div>
                <div className="kundeanmeldelser-text">
                    «Gjennom timer med Janne lærte jeg riktig teknikk i øvelsene mine, noe som gjorde at jeg følte meg
                    bedre og tryggere på trening. En konkret plan rettet mot meg gjorde at jeg nådde målene mine, noe
                    jeg ikke hadde klart på egen hånd. Var veldig fornøyd med opplevelsen❤️»
                </div>
            </div>
        </div>
    );
};

export default KundeAnmeldelserPage;
