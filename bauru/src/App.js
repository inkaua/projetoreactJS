import React from 'react';
import './estilos/estilos.css'
import Imagembauru from './paginas/imagembauru';

function App() {
  return (
    <div className="projeto">

      <header className="cabeçalho">
        <h1>Bauru - Cidade sem limites</h1>
      </header>

      <section className="seçao">
      <h2>Sobre Bauru</h2>
      <p>Bauru é uma cidade localizada no interior do estado de São Paulo, conhecida por sua economia diversificada e forte presença no setor de serviços.</p>
      <p>Com sua história rica e uma população acolhedora, Bauru é um lugar vibrante para se viver e visitar.</p>
      </section>

      <section className="seçao">
        <h2>Negócios em Bauru</h2>
        <p>Bauru abriga uma variedade de negócios, desde pequenas empresas familiares até grandes corporações multinacionais.</p>
        <p>O setor do comércio e serviços é especialmente forte, contribuindo significativamente para a economia local.</p>
              </section>

              <footer className="rodape">
                <p>Para mais informações sobre Bauru, visite o site oficial da prefeitura.</p>
              </footer>

              <Imagembauru/>

    </div>
  );
}

export default App;
