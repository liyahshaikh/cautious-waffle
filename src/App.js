import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Artists from './components/Artists';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
    
      <Switch>
          <Route path="/" exact component={() => <AboutUs />} />
          <Route path="/artists" exact component={() => <Artists />} />
          <Route path="/company-profile" exact component={() => <Profile />}/>
      </Switch>
        
    </Router>
  );
}

export default App;
