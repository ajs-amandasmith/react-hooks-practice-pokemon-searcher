import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData, search }) {
  const displayPokemon = pokeData.filter((pokemon) => {
    if (search === '') return true;
    return pokemon.name.includes(search.toLowerCase())
  }).map(pokemon => (
      <PokemonCard 
        key={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
        sprites={pokemon.sprites}
      />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
