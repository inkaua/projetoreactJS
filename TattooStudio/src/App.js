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

      <h2>Estúdio de Tatuagem Ink.aua</h2>
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
            <p> Para mais informações, visite o <a href="https://www.instagram.com/ink.aua/">instagram.</a></p>
          </rodape>
        </div>
      </Router>
  );
}

export default App;






