import React from "react";
import { Link } from 'react-router-dom';
import '../css/cabecalho.css';
import imagem from '../css/catiorrinho.svg';

const Cabecalho = () => {
    return(
        <header className="cabecalho container">
            <div className="menu-hamburguinho">
                <span className="menu-hamburguinho__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex--centro">
                    <img className="cabecalho__logo" src={imagem} alt="Logo Catiorrinho"/>
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </a>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a href="#" className="menu-item menu-item--entrar">Entrar</a></li>
                    <li><a href="#" className="menu-item">Produtos</a></li>
                    <li><a href="#" className="menu-item">Blog</a></li>
                    <li><Link to="./sobre" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>    
    );
}

export default Cabecalho;