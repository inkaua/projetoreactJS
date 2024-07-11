import React from "react";
import '../estilos/404.css';
import bauruzinho from '../assets/bauruzinho.jpg';
const Erro = () => {
  return (
    <div>
      <img src={bauruzinho} all="Bauru Imagem II" style={{ width:'23%', height: 'auto', margin: '0 10px'}}/>
      <p className="sem texto">Tente novamente e indique a págia correta</p>
      <p className="sem link">Página não encontrada!</p></div>
  )
}
export default Erro;


