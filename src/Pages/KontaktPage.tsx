import React, { useState } from 'react';
import './kontaktpage.css';

const KontaktPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        help: '',
        package: '',
        name: '',
        email: '',
        phone: '',
        instagram: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const handleSubmit = () => {
        //TODO change to real form
        window.open('https://form.jotform.com/242323185234046', '_blank');
        // console.log('Form submitted:', formData);
        // alert('Denne featuren er dessverre ikke tilgjengelig enda');
    };

    return (
        <div className="kontakt-container">
            {step === 1 && (
                <div className="form-slide">
                    <h2>HVA TRENGER DU HJELP MED?</h2>
                    <div className="options">
                        {[
                            'Jeg vil ned i vekt',
                            'Jeg vil opp i vekt',
                            'Jeg vil bli sterkere/bygge muskler',
                            'Jeg vil ned i fettprosent, og opp i muskelmasse',
                            'Jeg ønsker en sunnere livsstil',
                        ].map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name="help"
                                    value={option}
                                    checked={formData.help === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <button className="kontakt-button" onClick={nextStep}>
                        Neste
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="form-slide">
                    <h2>HVILKEN PAKKE ØNSKER DU?</h2>
                    <div className="options">
                        {['Treningsveiledning', 'Kostholdsveiledning', 'Trening og kosthold'].map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name="package"
                                    value={option}
                                    checked={formData.package === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <button className="kontakt-button" onClick={prevStep}>
                        Tilbake
                    </button>
                    <button className="kontakt-button" onClick={nextStep}>
                        Neste
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="form-slide">
                    <h2>KONTAKTINFORMASJON</h2>
                    <input type="text" name="name" placeholder="Navn" value={formData.name} onChange={handleChange} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Epost"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram (valgfri)"
                        value={formData.instagram}
                        onChange={handleChange}
                    />
                    <button className="kontakt-button" onClick={prevStep}>
                        Tilbake
                    </button>
                    <button className="kontakt-button" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default KontaktPage;
