
import Fetch from "./fetch";

function statCounter(pokemonArray) {
        let starterMons = [];
        pokemonArray.forEach(e => {
            // For every pokemon/object in the array
            const stats = e.stats;
            let valueHolder = [];
            let totalValueHolder = 0;
            var evo = 0;
            var group = 0;
            stats.forEach(total => {
                // Counts up values of array to a total
                const reducer = (previousValue, currentValue) => previousValue + currentValue;
                // Push the stats into a holder and add them up, then set into another holder 
                valueHolder.push(total.base_stat);
                totalValueHolder = valueHolder.reduce(reducer);
            });
            // nasty if else statement to give thenumber of which evolution the starter is
            // could've made this with an switch case in another function
            // could also have fetched the evolution chains but in my opinion that isn't important for a few pokemon
            if (e.naam === "bulbasaur" || e.naam === "charmander" || e.naam === "squirtle") {
                evo = 1;
            } else if (e.naam === "ivysaur" || e.naam === "charmeleon" || e.naam === "wartortle") {
                evo = 2;
            } else if (e.naam === "venusaur" || e.naam === "charizard" || e.naam === "blastoise") {
                evo = 3;
            }

            // nasty if else statement to give the number of which evolution chain the starter is in
            // could've made this with an switch case in another function
            // could also have fetched the evolution chains but in my opinion that isn't important for a few pokemon
            if (e.naam === "bulbasaur" || e.naam === "ivysaur" || e.naam === "venusaur") {
                group = 1;

            } else if (e.naam === "charmander" || e.naam === "charmeleon" || e.naam === "charizard") {
                group = 2;
            } else if (e.naam === "squirtle" || e.naam === "wartortle" || e.naam === "blastoise") {
                group = 3;
            }


            // Push the name, stats and the total of the stats into a new array
            starterMons.push({
                naam: e.naam,
                type: e.type,
                stats: e.stats,
                totaal: totalValueHolder,
                evo: evo,
                chain: group
            });
        });
        // d3Chart(starterMons);
        // d3Stacked(starterMons);
    }

    export default statCounter;