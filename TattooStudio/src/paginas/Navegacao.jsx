import React from 'react';
import { Link } from 'react-router-dom';

function Navegacao() {
    return (
        <nav className="Navegacao">
            <ul>
                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                <li><Link to="/Portfolio">Portfólio</Link></li>
            </ul>
        </nav>
    );
}

export default Navegacao;
