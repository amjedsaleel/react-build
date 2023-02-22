import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/myteam/manatee">Manatee</Link></li>
            <li><Link to="/myteam/narwhal">Narwhal</Link></li>
            <li><Link to="/myteam/whale">Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/myteam/manatee">
            <Manatee />
          </Route>
          <Route path="/myteam/narwhal">
            <Narwhal />
          </Route>
          <Route path="/myteam/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;