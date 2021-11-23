function Fetch() {
    function starters() {
        // Fetch init API
        fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
            .then(response => response.json())
            .then(data => getPokemonData(data))
    }

    function getPokemonData(data) {
        // let urls = [];
        let promises = [];
        let pokemonArray = [];

        const promises = data.results
            .map(result => result.url)
            .map(url => getPokemon(url));

        // Resolve all promises
        Promise.all(promises).then(results => {
            // For each pokemon in results push the pokemon to the array pokemonArray
            results.forEach(pokemon => {
                pokemonArray.push({
                    naam: pokemon.name,
                    stats: pokemon.stats,
                    type: pokemon.types[0].type.name
                });
            });
            countStats(pokemonArray);
        });
    }
    starters();
}

export default Fetch;