async function getPokemonData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  console.log(data);
}
getPokemonData();
