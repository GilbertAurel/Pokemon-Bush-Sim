/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import PokemonListCard from "components/pokemonListCard";
import LoadingIndicator from "./loadingIndicator";
import { scrollHandler } from "./handler";

export default function list({ pokemons, data, setCurrentPage }) {
  return (
    <div
      css={css`
        flex: 1;
        min-height: 250px;
        width: 100%;
        max-width: 900px;
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      `}
      onScroll={(event) => scrollHandler(event, data, setCurrentPage)}
    >
      {pokemons.map((pokemon) => (
        <PokemonListCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <LoadingIndicator />
    </div>
  );
}
