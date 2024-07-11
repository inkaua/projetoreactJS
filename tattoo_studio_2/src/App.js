import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Navegacao.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

