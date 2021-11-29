
import './App.scss';
import React from 'react';
import Fetch from './providers/fetch';
import BarChart from './charts/BarChart';
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
    <h2>What are the biggest base stats of the gen 1 starter Pokémon?</h2>
    <div id="filters">
        <strong>Filter:</strong>
        
        <label><input type="radio" name="filters" value="1" id="filter-1-only" class="filters" />First evolution</label>
        <label><input type="radio" name="filters" value="1" id="filter-2-only" class="filters" />Second
            evolution</label>
        <label><input type="radio" name="filters" value="1" id="filter-3-only" class="filters" />Third evolution</label>
        <label><input type="radio" name="filters" value="1" id="filter-all" class="filters" />All evolutions</label>
    </div>
    <div class="hidden" id="toolTip">
        <p id="type"></p>
        <p id="value"></p>
    </div>

      {json && <BarChart data={json} />}
    </div>
  );
}

export default App;
