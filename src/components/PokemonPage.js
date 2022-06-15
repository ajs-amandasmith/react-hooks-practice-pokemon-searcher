import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(pokes => setPokeData(pokes))
  }, [])

  function handleSearch(searchTerm) {
    setSearch(searchTerm)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokeData={pokeData} search={search} />
    </Container>
  );
}

export default PokemonPage;
