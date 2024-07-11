import React, { useState, useEffect } from 'react';
import image1 from '../Images/tattoo1.jpg'; // Importe suas imagens
import image2 from '../Images/tattoo2.jpg';
import image3 from '../Images/tattoo3.jpg';
import image4 from '../Images/tattoo4.jpg';
import image5 from '../Images/tattoo5.jpg';
import image6 from '../Images/tattoo6.jpg';

function Home() {
    const [currentImage, setCurrentImage] = useState(0); // Estado para controlar a imagem atual

    // Array com as URLs das imagens
    const images = [image1, image2, image3, image4, image5, image6];

    useEffect(() => {
        // Função para alternar entre as imagens a cada 3 segundos
        const interval = setInterval(() => {
            setCurrentImage(current => (current + 1) % images.length);
        }, 3000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [images.length]); // Executa o efeito sempre que o tamanho do array de imagens mudar

    return (
        <div>
            <h1>Tattoo Studio</h1>
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} style={{ maxWidth: '300%', maxHeight: '800px', display: 'block', margin: '20px auto' }} />
        </div>
    );
}

export default Home;
