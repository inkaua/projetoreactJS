import React from "react";
import imagem1 from '../assets/bauruI.jpg';
import imagem2 from '../assets/bauruII.jpg';
import imagem3 from '../assets/bauruIII.jpg';

function imagembauru() {
    return (
        <div>
            <h1>Galeria de Imagens</h1>
            <img src={imagem1} alt="Bauru Imagem I" style={{ width: '43%', height: 'auto', margin: '0 20px'}} />
            <img src={imagem2} alt="Bauru imagem II" style={{ width: '22%', height: 'auto', margin: '0 10px'}} />
            <img src={imagem3} alt="Bauru imagem III" style={{ width: '22%', height:'auto', margin: '0 10px'}} />

        </div>

    );
}

export default imagembauru;