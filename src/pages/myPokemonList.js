import React, { useContext } from "react";
import { SavedPokemonContext } from "../context/PokemonContext";

function myPokemonList() {
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);

  console.log(savedPokemon);

  if (savedPokemon.length == 0) return <h1>list is empty</h1>;

  return (
    <div>
      <h1>mypokemon</h1>
      {savedPokemon.map((pokemon) => (
        <h1>{pokemon}</h1>
      ))}
    </div>
  );
}

export default myPokemonList;
