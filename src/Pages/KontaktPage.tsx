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
    const [errors, setErrors] = useState({
        email: '',
        phone: '',
    });
    const [touched, setTouched] = useState({
        email: false,
        phone: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step === 3 && validateForm()) {
            setStep(step + 1);
        } else if (step < 3) {
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Ditt ønsket har blitt sendt inn');
        }
    };

    const validateForm = () => {
        let valid = true;
        let emailError = '';
        let phoneError = '';

        // Email validation
        if (touched.email && !formData.email.includes('@')) {
            emailError = 'Vennligst skriv en gyldig e-postadresse med @';
            valid = false;
        }

        // Norwegian phone validation (only 8 digits after +47)
        if (touched.phone && formData.phone && !/^\+47\d{8}$/.test(formData.phone)) {
            phoneError = 'Telefonnummeret må være norsk og bestå av 8 sifre.';
            valid = false;
        }

        setErrors({ email: emailError, phone: phoneError });
        return valid;
    };

    const handleBlur = (field: string) => {
        setTouched({ ...touched, [field]: true });
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
                        onBlur={() => handleBlur('email')}
                        style={{ color: 'white' }}
                    />
                    {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon (+47)"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        style={{ color: 'white' }}
                    />
                    {touched.phone && errors.phone && <div className="error-message">{errors.phone}</div>}
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram (valgfri)"
                        value={formData.instagram}
                        onChange={handleChange}
                        style={{ color: 'white' }}
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
