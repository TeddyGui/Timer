import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./components/Timer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://i.epvpimg.com/ZzYweab.png" className="App-logo" alt="logo" />
        <Timer />
      </header>
    </div>
  );
}

export default App;
