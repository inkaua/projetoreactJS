// components/Portfolio.js

import React from 'react';

const portfolioStyles = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
};

function Portfolio() {
    // Exemplo de dados simulados de fotos de tatuagens
    const tattooPhotos = [
        { id: 1, imageUrl: 'https://example.com/tattoo1.jpg', description: 'Tatuagem Tradicional' },
        { id: 2, imageUrl: 'https://example.com/tattoo2.jpg', description: 'Tatuagem Oriental' },
        { id: 3, imageUrl: 'https://example.com/tattoo3.jpg', description: 'Tatuagem Realista' },
        { id: 4, imageUrl: 'https://example.com/tattoo4.jpg', description: 'Tatuagem Minimalista' },
    ];

    return (
        <div style={portfolioStyles}>
            <h2>Portfólio</h2>
            <div className="portfolio-grid">
                {tattooPhotos.map(photo => (
                    <div key={photo.id} className="portfolio-item">
                        <img src={photo.imageUrl} alt={photo.description} />
                        <p>{photo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
