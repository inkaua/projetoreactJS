import React from 'react';
import './css/base.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './paginas/Cabecalho';
import Post from './paginas/Post';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
          </Route>
          <Route exact path='/sobre'>
            <Sobre />
            </Route><Route path='*'>
              <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;