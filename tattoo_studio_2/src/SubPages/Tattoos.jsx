import React from 'react';

function Tattoos() {
    // Supondo que suas imagens estejam localizadas em 'src/assets/tattoos/'
    const tattooImages = [
        require('../Images/tattoo1.jpg').default,
        require('../Images/tattoo2.jpg').default,
        require('../Images/tattoo3.jpg').default,
        require('../Images/tattoo4.jpg').default,
        require('../Images/tattoo5.jpg').default,
        require('../Images/tattoo6.jpg').default,
    ];

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="gallery">
                {tattooImages.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Tattoo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tattoos;
