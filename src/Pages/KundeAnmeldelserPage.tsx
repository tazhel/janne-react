import React, { useState } from 'react';
import './kundeanmeldelserpage.css';

const KundeAnmeldelserPage: React.FC = () => {
    const [expandedReview1, setExpandedReview1] = useState(false);

    const toggleReview1 = () => setExpandedReview1(!expandedReview1);

    return (
        <div className="kundeanmeldelser-container">
            <img className="om-meg-image" src="CoachingMedJanneSmiley.png" alt="Coaching with Janne" />
            <div className="review-cards">
                {/* Review Box 1 */}
                <div className="review-box">
                    <div className="review-body">
                        <div className="review-text-container">
                            <div className="review-qoute-left">“</div>
                            <div className="review-text">
                                {expandedReview1 ? (
                                    <>
                                        <p>
                                            I 12 uker hadde jeg gleden av å trene med Janne som PT, og jeg kan ikke
                                            anbefale henne nok! Hun var dyktig og profesjonell i alt hun gjorde.
                                            Kunnskapen og engasjementet hennes for trening og veiledning ga meg full
                                            tillit fra første møte. Som veileder var hun ikke bare teknisk dyktig, men
                                            også en fantastisk støttespiller og motivator gjennom hele prosessen!
                                        </p>
                                        <p>
                                            Takket være Janne opplevde jeg en mye større mestringsfølelse på trening, og
                                            ikke minst fant jeg tilbake til treningsgleden. Hun klarte hele veien å
                                            tilpasse treningen til mine forutsetninger og mål, og dette bidro til at jeg
                                            opplevde framgang og mer motivasjon! Jeg følte meg alltid sett og hørt, noe
                                            som gjorde treningsøktene med Janne til noe jeg virkelig gledet meg til.
                                        </p>
                                        <p>
                                            Om du er på jakt etter en PT som kan hjelpe deg med å nå dine mål, og som
                                            samtidig gjør treningen gøy og givende, så anbefaler jeg Janne på det
                                            sterkeste❤️
                                        </p>
                                    </>
                                ) : (
                                    <p>
                                        I 12 uker hadde jeg gleden av å trene med Janne som PT, og jeg kan ikke anbefale
                                        henne nok! Hun var dyktig og profesjonell i alt hun gjorde. Kunnskapen og
                                        engasjementet hennes for trening og veiledning ga meg full tillit fra første
                                        møte. Som veileder var hun ikke bare teknisk dyktig, men også en fantastisk
                                        støttespiller og motivator gjennom hele prosessen!
                                    </p>
                                )}
                            </div>
                            <div className="review-qoute-right">”</div>
                        </div>
                        <div className="review-name-expand">-Emma Julie Bratli</div>
                    </div>
                    <div className="expand-toggle" onClick={toggleReview1}>
                        {expandedReview1 ? '▴' : '▾'} Read {expandedReview1 ? 'Less' : 'More'}
                    </div>
                </div>

                {/* Review Box 2 */}
                <div className="review-box">
                    <div className="review-body">
                        <div className="review-text-container">
                            <div className="review-qoute-left">“</div>
                            <div className="review-text">
                                <p>
                                    Gjennom timer med Janne lærte jeg riktig teknikk i øvelsene mine, noe som gjorde at
                                    jeg følte meg bedre og tryggere på trening. En konkret plan rettet mot meg gjorde at
                                    jeg nådde målene mine, noe jeg ikke hadde klart på egen hånd. Var veldig fornøyd med
                                    opplevelsen❤️
                                </p>
                            </div>
                            <div className="review-qoute-right">”</div>
                        </div>
                        <div className="review-name">-Eva-Elisabeth Løbbel</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KundeAnmeldelserPage;
