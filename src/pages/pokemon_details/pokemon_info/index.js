/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import RenderTypes from "./typesSection";
import RenderMoves from "./movesSection";
import RenderPokemonImage from "./pokemonImage";

export default function pokemonInfo({ sprites, name, types, moves }) {
  return (
    <div
      css={css`
        flex: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <RenderPokemonImage sprites={sprites} />
      <RenderTypes name={name} types={types} />
      <RenderMoves moves={moves} />
    </div>
  );
}
