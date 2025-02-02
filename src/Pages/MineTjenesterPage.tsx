import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import IsMobile from '../hooks/IsMobile';
import './minetjenesterpage.css';

const MineTjenesterPage: React.FC = () => {
    const isMobile = IsMobile();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeInAndOut = (scrollY: number) => {
        const fadeDistance = 1000; // Adjust based on scroll distance
        const fade = scrollY / fadeDistance; // Remove Math.min to allow values greater than 1
        return fade;
    };

    const fade = fadeInAndOut(scrollY);
    return (
        <div className="my-services-container" style={{ opacity: isMobile ? 0 + fade * 4 : 1 }}>
            <Card
                title="Treningsveiledning"
                binding="3 måneders binding"
                price="1399kr /mnd"
                description={[
                    'Personlig tilpasset treningsprogram',
                    'Veiledning og teknikkvideoer til alle øvelser',
                    'Loggføring av øktene for å følge progresjonen',
                    'Chat med meg tilgjengelig 24/7',
                ]}
            />
            <Card
                title="Kostholdsveiledning"
                binding="3 måneders binding"
                price="1399kr /mnd"
                description={[
                    'Personlig tilpasset kostholdsplan med kalorier og makroer regnet ut for deg',
                    'Flere oppskrifter å velge mellom',
                    'Tilpasning og justering av matplan ved behov',
                    'Chat med meg tilgjengelig 24/7',
                ]}
            />
            <Card
                title="Trening og kosthold"
                binding="6 måneders binding"
                price="1899kr /mnd"
                description={[
                    'Tilpasset treningsprogram og kostholdsplan',
                    'Personlig oppfølging og veiledning med teknikkvideoer',
                    'Hjelp og råd til gode rutiner',
                    'Chat med meg tilgjengelig 24/7',
                    'Flere gode oppskrifter å velge mellom',
                    'Loggføring av øktene for å følge progresjon',
                ]}
                label
            />
            <Card
                title="Trening og kosthold"
                binding="3 måneders binding"
                price="2199kr /mnd"
                description={[
                    'Tilpasset treningsprogram og kostholdsplan',
                    'Personlig oppfølging og veiledning med teknikkvideoer',
                    'Hjelp og råd til gode rutiner',
                    'Chat med meg tilgjengelig 24/7',
                    'Flere gode oppskrifter å velge mellom',
                    'Loggføring av øktene for å følge progresjon',
                ]}
            />
        </div>
    );
};

export default MineTjenesterPage;
