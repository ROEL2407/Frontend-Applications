import BarChart from "../charts/BarChart";


export default function Visualization (json) {
    return (
        <>
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
  </>
    );
}