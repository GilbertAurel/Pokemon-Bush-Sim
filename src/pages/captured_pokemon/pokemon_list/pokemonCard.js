/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

export default function pokemonCard({ pokemon }) {
  return (
    <div
      css={css`
        flex: 1 0 150px;
        max-width: 150px;
        max-height: 200px;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fcfcfc;
        border: 3px solid #000000;
        border-radius: 10px;

        h1 {
          padding: 0;
          margin: 0;
          font-family: "dogica";
          font-size: 16px;
          color: ${COLORS.primary};
        }

        p {
          padding: 0;
          margin: 0;
          font-family: "dogica";
          font-size: 8px;
        }
      `}
    >
      <img
        css={css`
          object-fit: contain;
        `}
        src={pokemon.sprites.front_default}
        alt=""
      />
      <h1>{pokemon.name}</h1>
      <p>{pokemon.pokemon}</p>
    </div>
  );
}
