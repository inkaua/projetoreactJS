import React from 'react';
import imagem1 from '../assets/tattoo1.jpg';
import imagem2 from '../assets/tattoo2.jpg';
import imagem3 from '../assets/tattoo3.jpg';
import imagem4 from '../assets/tattoo4.jpg';
import imagem5 from '../assets/tattoo5.jpg';
import imagem6 from '../assets/tattoo6.jpg';

function Portfolio() {
  return (
    <div>
    <h1>Ultimos trabalhos realizados</h1>
    <img src={imagem1} alt="Tattoo 1" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />
    <img src={imagem2} alt="Tattoo 2" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />
    <img src={imagem3} alt="Tattoo 3" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />
    <img src={imagem4} alt="Tattoo 4" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />
    <img src={imagem5} alt="Tattoo 5" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />
    <img src={imagem6} alt="Tattoo 6" style={{ width: '20%', height: 'auto', margin: '0 10px' }} />

    </div>
  );
}

export default Portfolio;
