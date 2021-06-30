import React, { createContext, useState } from "react";

export const SavedPokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [savedPokemon, setSavedPokemon] = useState([
    {
      name: "nick",
      pokemon: "real name",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      types: [{ type: { name: "all" } }],
    },
    {
      name: "test",
      pokemon: "test",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      types: [{ type: { name: "all" } }],
    },
    {
      name: "tttt",
      pokemon: "tttt",
      sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      types: [{ type: { name: "all" } }],
    },
  ]);

  return (
    <SavedPokemonContext.Provider value={{ savedPokemon, setSavedPokemon }}>
      {children}
    </SavedPokemonContext.Provider>
  );
};
