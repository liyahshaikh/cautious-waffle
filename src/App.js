import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Artists from './components/Artists';


function App() {
  return (
    <Router>
    
      <Switch>
          <Route path="/" exact component={() => <AboutUs />} />
          <Route path="/artists" exact component={() => <Artists />} />
      </Switch>
        
    </Router>
  );
}

export default App;
