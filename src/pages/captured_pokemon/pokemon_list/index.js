/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

import RenderPokemonCard from "./pokemonCard";

export default function pokemonList({ savedPokemon }) {
  const RenderList = () => {
    return savedPokemon.map((pokemon, index) => (
      <RenderPokemonCard key={index} pokemon={pokemon} />
    ));
  };

  const RenderEmptyList = () => {
    return (
      <h1
        css={css`
          font-family: "dogica";
          font-size: 18px;
          color: ${COLORS.gray};
        `}
      >
        No Pokemon Found!
      </h1>
    );
  };

  return (
    <div
      css={css`
        flex: 1;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: ${savedPokemon.length > 0 ? "baseline" : "center"};
        gap: 10px;
        flex-wrap: wrap;
        overflow: scroll;

        @media (min-width: 1080px) {
          padding: 20px 0 50px 0;
        }
      `}
    >
      {savedPokemon.length > 0 ? <RenderList /> : <RenderEmptyList />}
    </div>
  );
}
