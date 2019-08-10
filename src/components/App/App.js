import React from 'react';

import './App.css';
import Names from './names'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">   
      <Router>
        <header className="App-header d-none">
          
         
          <Link
            className="App-link"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="App-link"
            to="/names"
          >
            NAME
          </Link>
        </header>    
        <Switch>
          <Route path="/" exact component={Home}></Route>       
          <Route path="/" component={Names}></Route>      
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
