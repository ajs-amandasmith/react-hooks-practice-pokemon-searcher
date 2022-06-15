import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

/*
App
  |__PokemonPage
          |__Container
          |__PokemonForm
          |__Search
          |__PokemonCollection
                    |__PokemonCard

*/
