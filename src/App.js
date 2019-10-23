import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('environment', process.env.REACT_APP_NEWS_API_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>{process.env.REACT_APP_NEWS_API_KEY}</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
