import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Estilos from './App.css';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Tattoos from './SubPages/Tattoos'; // Componente para página de Tattoos
import Consultations from './SubPages/Consultations'; // Componente para página de Consultations

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* Adicione outros links de navegação aqui */}
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/tattoos" component={Tattoos} />
          <Route path="/consultations" component={Consultations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


