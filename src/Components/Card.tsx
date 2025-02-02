import React from 'react';
import './card.css';

interface CardProps {
    title: string;
    binding: string;
    price: string;
    description: string[];
    label?: boolean;
}

const Card: React.FC<CardProps> = ({ title, binding, price, description, label }) => {
    const handleClick = () => {
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="card" onClick={handleClick}>
            {label && <div className="card-label">ANBEFALT</div>}
            <div className="card-title">{title}</div>
            <div className="card-body">
                <div className="card-binding">{binding}</div>
                <div className="card-price">{price}</div>
                <div className="card-text-container">
                    {description.map((item, index) => (
                        <div key={index} className="card-item">
                            <div className="checkmark-icon">✓</div>
                            <div className="card-text">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
