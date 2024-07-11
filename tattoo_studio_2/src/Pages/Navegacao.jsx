// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="logo">
                <h1>Tattoo Studio</h1> {/* Nome do estúdio */}
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

