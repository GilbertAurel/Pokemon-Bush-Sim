/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

import RenderPokemonCard from "./pokemonCard";

export default function pokemonList({ savedPokemon, releasePokemonHandler }) {
  const RenderList = () => {
    return savedPokemon.map((pokemon, index) => (
      <RenderPokemonCard
        key={index}
        pokemon={pokemon}
        releasePokemonHandler={releasePokemonHandler}
      />
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
        flex: ${savedPokemon.length === 0 && 1};
        width: 90%;
        margin-bottom: 80px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: ${savedPokemon.length === 0 && "center"};
        gap: 10px;
        flex-wrap: wrap;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 1080px) {
          padding: 20px 0 50px 0;
        }
      `}
    >
      {savedPokemon.length > 0 ? <RenderList /> : <RenderEmptyList />}
    </div>
  );
}
