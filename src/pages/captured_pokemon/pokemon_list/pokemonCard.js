/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function pokemonCard({ pokemon }) {
  return (
    <div
      css={css`
        flex: 1 0 150px;
        max-width: 150px;
        max-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
        border-radius: 10px;
      `}
    >
      <p>{pokemon.name}</p>
    </div>
  );
}
