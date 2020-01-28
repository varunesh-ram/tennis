import React from 'react';
import './App.css';
import {AppConstants} from './constants/App.constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>{AppConstants.Header}</h1>
      </header>
    </div>
  );
}

export default App;
