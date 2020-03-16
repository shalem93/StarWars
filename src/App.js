import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Home path="/:object/:id" />
      </Router>
    </div>
  );
}

export default App;
