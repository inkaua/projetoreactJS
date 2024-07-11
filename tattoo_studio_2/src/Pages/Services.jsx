import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link para criar links de navegação

function Services() {
    return (
        <div>
            <h2>My Services</h2>
            <ul>
                <li><Link to="/tattoos">Tattoos</Link></li>
                <li><Link to="/consultations">Consultations</Link></li>
            </ul>
        </div>
    );
}

export default Services;

