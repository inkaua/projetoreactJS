// components/Orcamento.js

import React, { useState } from 'react';

const orcamentoStyles = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
};

function Orcamento() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [photos, setPhotos] = useState([]);

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        setPhotos(files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do cliente e as fotos para o servidor
        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
        console.log('Fotos:', photos);
        // Limpar os campos após o envio
        setName('');
        setEmail('');
        setPhone('');
        setPhotos([]);
    };

    return (
        <div style={orcamentoStyles}>
            <h2>Solicitar Orçamento</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={handleNameChange} required />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="tel" value={phone} onChange={handlePhoneChange} required />
                </label>
                <br />
                <label>
                    Carregar Fotos:
                    <input type="file" multiple onChange={handlePhotoUpload} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Orcamento;
