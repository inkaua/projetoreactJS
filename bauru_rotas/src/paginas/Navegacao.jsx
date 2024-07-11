import React from 'react';
import { Link } from 'react-router-dom';

function Navegacao() {
    return (
        <nav className="Navegacao">
            <ul>
                <li><Link to="/">Sobre Bauru</Link></li>
                <li><Link to="/NegociosBauru">Negocios Bauru</Link></li>
                <li><Link to="/ImagemBauru">Imagem Bauru</Link></li>
            </ul>
        </nav>
    );
}

export default Navegacao;
