import React from 'react';
import './estilos/estilos.css';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Sobre from './paginas/Sobre.jsx';
import Portfolio from './paginas/Portfolio.jsx';
import Contato from './paginas/Contato.jsx';
import Navegacao from './paginas/Navegacao';
import Erro from './paginas/Erro';


function App() {
  return (
    <Router>
      <div className="Fundo">

      <Navegacao/>

      <h2>INK.AUA</h2>
      <Switch>      
       <Route exact path='/'>
            <Sobre/>
          </Route>

          <Route path='/Contato'>
            <Contato/>
          </Route>

          <Route path='/Portfolio'>
            <Portfolio/>
          </Route>

          <Route path='*'>
            <Erro/>
          </Route>
          </Switch>

          <rodape className="Rodape">
            <p> Para mais informações sobre Bauru, visite o <a href="http://www.bauru.sp.gov.br">site oficial da prefeitura.</a></p>
          </rodape>
        </div>
      </Router>
  );
}

export default App;






