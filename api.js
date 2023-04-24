async function getPokemonData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/6")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
}
getPokemonData();
