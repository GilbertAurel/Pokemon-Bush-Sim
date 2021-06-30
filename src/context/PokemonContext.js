import React, { createContext, useState } from "react";

export const SavedPokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [savedPokemon, setSavedPokemon] = useState([]);

  return (
    <SavedPokemonContext.Provider value={{ savedPokemon, setSavedPokemon }}>
      {children}
    </SavedPokemonContext.Provider>
  );
};
