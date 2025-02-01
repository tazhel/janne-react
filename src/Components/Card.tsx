import React from 'react';
import './Card.css';

interface CardProps {
    title: string;
    binding: string;
    price: string;
    description: string[];
    label?: boolean;
}

const Card: React.FC<CardProps> = ({ title, binding, price, description, label }) => {
    return (
        <div className="card">
            {label && <div className="card-label">VALUE</div>}
            <div className="card-title">{title}</div>
            <div className="card-body">
                <div className="card-binding">{binding}</div>
                <div className="card-price">{price}</div>
                <div className="card-text-container">
                    {description.map((item, index) => (
                        <div className="card-text" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
