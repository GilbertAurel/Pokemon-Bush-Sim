/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function ownedPokemon({ savedPokemon }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}
    >
      <h1
        css={css`
          font-family: "whitney";
          font-size: 15px;
          color: #000;
        `}
      >
        Owned pokemons: {savedPokemon.length}
      </h1>
    </div>
  );
}
