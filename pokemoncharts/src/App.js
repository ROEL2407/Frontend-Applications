import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fetch from './providers/fetch';
//import statCounter from './providers/statCounter';
import { useEffect, useState } from 'react';

function App() {
  const [json, setJson] = useState(null);
  useEffect(() => {
     Fetch().then(data => setJson(data));
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>
          {JSON.stringify(json, null, 3)}
        </pre>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
