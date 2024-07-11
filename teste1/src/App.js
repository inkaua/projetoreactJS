
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './Home';
import Sobre from './Sobre';

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
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<Sobre/>} />
      </Routes>
    </div>
  </Router>
);
}

export default App;

