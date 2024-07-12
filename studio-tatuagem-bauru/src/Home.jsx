// components/Home.js

import React from 'react';

const homeStyles = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '50px',
    textAlign: 'center',
};

function Home() {
    return (
        <div style={homeStyles}>
            <h2>Estúdio de Tatuagem em Bauru/SP</h2>
            <p>Com mais de 10 anos de experiência em tatuagem, oferecemos diversos estilos de trabalho, incluindo:</p>
            <ul>
                <li>Tatuagem Tradicional</li>
                <li>Tatuagem Oriental</li>
                <li>Tatuagem Realista</li>
                <li>Tatuagem Minimalista</li>
            </ul>
            <p>Nosso estúdio está localizado em Bauru, SP, e estamos prontos para transformar suas ideias em arte!</p>
        </div>
    );
}

export default Home;
