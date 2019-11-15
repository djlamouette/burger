import React from 'react';
import './App.css';

import Toolbar from './components/toolbar/toolbar.js';
import BurgerBuilder from './components/burgerBuilder/burgerBuilder'

function App() {
  return (
    <div className="App">
        <Toolbar></Toolbar>
        <BurgerBuilder/> 
    </div>
  );
}

export default App;
