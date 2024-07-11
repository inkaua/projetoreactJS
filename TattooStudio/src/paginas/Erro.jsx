import React from "react";
import '../estilos/404.css';
import erro from '../assets/erro.jpg';
const Erro = () => {
  return (
    <div>
      <img src={erro} all="Erro" style={{ width:'23%', height: 'auto', margin: '0 10px'}}/>
      <p className="sem texto">PÁGINA NÃO ENCONTRADA!</p>
      <p className="sem link">Tente novamente</p></div>
  )
}
export default Erro;


