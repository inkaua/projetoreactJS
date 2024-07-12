// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Orcamento from './Orcamento';

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
                            <Link to="/portfolio">Portfólio</Link>
                        </li>
                        <li>
                            <Link to="/orcamento">Orçamento</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/orcamento">
                        <Orcamento />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

