import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar.component';
import './App.css';
import HomeGrid from './Components/Grid/HomeGrid.component';
import Sidebar from './Components/Navbar/SideBar/Sidebar.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Grid container direction="row">
              
              <Grid md={3}>
                <Sidebar />
              </Grid>

              <Grid direction="column" md={9}>
                <Grid sm={3}>
                  <Navbar />
                </Grid>
                
                <HomeGrid />
              </Grid>

            </Grid>
            
            
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
