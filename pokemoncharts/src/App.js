
import './App.scss';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Fetch from './providers/fetch';
import Visualization from "./components/Visualization";
import { useEffect, useState } from 'react';

function App() {
  // set default of fetch to null
  const [json, setJson] = useState(null);
  // get data async
  useEffect(() => {
    Fetch().then(data => {
      setJson(data)});
  }, [])
  
  if (!json) {
    return "loading";
  }
  return (
    <div className="App">
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/visualization">Visualization</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualization" element={<Visualization />}  data={json}/>
    </Routes>
    </div>
  );
}

export default App;
