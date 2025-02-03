import { EmailClient } from '@azure/communication-email';
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
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

        // Only clear the error if the user starts typing again
        if (errors[e.target.name as keyof typeof errors]) {
            setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
        }
    };

    const nextStep = () => {
        if (step === 3 && validateForm()) {
            setStep(step + 1);
        } else if (step < 3) {
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                // Create an EmailClient instance
                const connectionString =
                    'endpoint=https://service-form-janne.norway.communication.azure.com/;accesskey=FDu8AtFgVOnkTgRsY67nxlDkeIQcs269ZNTKWq1asvgFHn3vgrf9JQQJ99BBACULyCpxhlXyAAAAAZCSH6mA';
                const emailClient = new EmailClient(connectionString);

                const sender = 'DoNotReply@8b407c6b-266f-4c77-ae81-a18dd6b4f667.azurecomm.net'; // Your verified sender email (replace if needed)
                const recipient = 'nordinjanne3@gmail.com'; // The recipient email
                // const recipient = 'nordinjanne3@gmail.com'; // The recipient email

                const emailMessage = {
                    senderAddress: sender,
                    content: {
                        subject: 'Ny kunde Coaching med Janne Nordin',
                        plainText: `
                            Ny kunde informasjon:
                    
                            Hjelp: ${formData.help}
                            Pakke: ${formData.package}
                            Navn: ${formData.name}
                            E-post: ${formData.email}
                            Telefon: ${formData.phone}
                            Instagram: ${formData.instagram}
                        `,
                        html: `
                            <html>
                                <body>
                                    <h1>Ny kunde informasjon:</h1>
                                    <p><strong>Hjelp:</strong> ${formData.help}</p>
                                    <p><strong>Pakke:</strong> ${formData.package}</p>
                                    <p><strong>Navn:</strong> ${formData.name}</p>
                                    <p><strong>E-post:</strong> ${formData.email}</p>
                                    <p><strong>Telefon:</strong> ${formData.phone}</p>
                                    <p><strong>Instagram:</strong> ${formData.instagram}</p>
                                </body>
                            </html>
                        `,
                    },
                    recipients: {
                        to: [{ address: recipient }],
                    },
                };

                const poller = await emailClient.beginSend(emailMessage);
                const result = await poller.pollUntilDone();

                if (result.status === 'Succeeded') {
                    alert(
                        'Skjemaet ditt er sendt inn! Janne ser frem til å hjelpe deg med dine treningsmål, og du vil høre fra henne snart.',
                    );
                } else {
                    alert(
                        `Noe gikk galt. Vennligst prøv igjen, eller send en e-post direkte til nordinjanne3@gmail.com.`,
                    );
                }
            } catch (error) {
                alert('Noe gikk galt. Vennligst prøv igjen, eller send en e-post direkte til nordinjanne3@gmail.com.');
                console.error('Error during email send:', error);
            }
        }
    };

    const validateForm = () => {
        let valid = true;
        let emailError = '';
        let phoneError = '';

        // Validate only touched fields
        if (touched.email && formData.email.trim() !== '' && !formData.email.includes('@')) {
            emailError = 'Vennligst skriv en gyldig e-postadresse';
            valid = false;
        }

        if (touched.phone && formData.phone.trim() !== '' && !/^(?:\+47)?\d{8}$/.test(formData.phone)) {
            phoneError = 'Telefonnummeret må bestå av 8 sifre.';
            valid = false;
        }

        setErrors({ email: emailError, phone: phoneError });
        return valid;
    };

    const handleBlur = (field: string) => {
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
        validateForm(); // Validate only when leaving the field
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
                    <button className="kontakt-button" onClick={nextStep} disabled={!formData.help}>
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
                    <button className="kontakt-button" onClick={nextStep} disabled={!formData.package}>
                        Neste
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="form-slide">
                    <h2>KONTAKTINFORMASJON</h2>
                    <input type="text" name="name" placeholder="Navn" value={formData.name} onChange={handleChange} />
                    {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Epost"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                    />
                    {touched.phone && errors.phone && <div className="error-message">{errors.phone}</div>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon (+47)"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
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
