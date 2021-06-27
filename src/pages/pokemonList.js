import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_TEN_OFFSET_POKEMONS_QUERY } from "../constants/queries";
import { SavedPokemonContext } from "../context/PokemonContext";

function pokemonList() {
  const [currentPage, setCurrentPage] = useState(0);
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);
  const itemPerPage = 10;

  const { loading, error, data } = useQuery(GET_TEN_OFFSET_POKEMONS_QUERY, {
    variables: { limit: itemPerPage, currentPage: currentPage },
  });

  if (loading) return <h1>loading..</h1>;
  if (error) return <h1>data fetch error</h1>;

  return (
    <div>
      {data.pokemons.results.map((pokemon) => (
        <div key={pokemon.id}>
          <Link
            to={{
              pathname: `/pokemon/${pokemon.name}`,
              state: pokemon,
            }}
          >
            {pokemon.name}
          </Link>
        </div>
      ))}
      <h1>{savedPokemon.length}</h1>
      <button
        onClick={() => {
          setCurrentPage(data.pokemons.prevOffset);
          setSavedPokemon((prevData) => [...prevData, "yep"]);
        }}
      >
        prev
      </button>
      <button onClick={() => setCurrentPage(data.pokemons.nextOffset)}>
        next
      </button>
      <Link to={"/collections"}>Go to my pokemon</Link>
    </div>
  );
}

export default pokemonList;
