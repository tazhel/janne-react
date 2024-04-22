import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useState } from 'react';
import IsMobile from '../hooks/IsMobile';

const Features: React.FC = () => {
    const isMobile = IsMobile();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleHover = (index: number) => {
        if (!isMobile) setHoveredIndex(index);
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <ImageList
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    scrollbarWidth: 'none' /* Disable scrollbar */,
                    '-ms-overflow-style': 'none' /* Hide scrollbar for IE & Edge */,
                }}
                cols={isMobile ? 1 : 4}
                gap={8}
            >
                {itemData.map((item, index) => (
                    <ImageListItem
                        key={item.img}
                        sx={{
                            position: 'relative',
                            transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                        className="features-image-container"
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            className="features-image"
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }}
                        />
                        <div className="features-text-container">
                            <div className="features-text">{item.title}</div>
                            <div className="features-text-small">{item.author}</div>
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Features;

const itemData = [
    {
        img: '/FeatureEgenApp.webp',
        title: 'Egen app',
        author: 'Med Zenfit appen så kan jeg bruke tid på å lage programmet perfekt til deg, mens alt du trenger kommer i appen',
    },
    {
        img: '/FeaturesTrening.jpg',
        title: 'Treningsplanlegger',
        author: 'Legger opp gode treningsplaner for deg, sammen finner vi det som passer deg best',
    },
    {
        img: '/FeaturesMåltid.jpg',
        title: 'Måltidsplanlegger',
        author: 'Med måltidplanlegging så vil treningen bli komplett',
    },
    {
        img: '/FeaturesRinge.jpg',
        title: 'Tekst og videochat',
        author: 'God kommunikasjon er viktig, ring eller chat om det er noe',
    },
];
