import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Home from './page/home';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' component={<Home />} />
      </Router>
    </div>
  );
}

export default App;
