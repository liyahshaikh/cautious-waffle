import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './components/Hero';
import Main from './components/Main';


function App() {
  return (
    <Router>
      
      <Hero />
      <Main />
     

      
    </Router>
  );
}

export default App;
