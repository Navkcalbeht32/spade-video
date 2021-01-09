import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.component';
import './App.css';
import HomeGrid from './Components/Grid/HomeGrid.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeGrid />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
