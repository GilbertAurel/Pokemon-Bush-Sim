/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import IMAGES from "constants/images";
import { COLORS } from "constants/theme";

export default function myPokemonButton() {
  return (
    <Link
      css={css`
        padding: 5px 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        text-decoration: none;
        background-color: ${COLORS.gray};
        border-radius: 20px;
        border: 2px solid #000;
      `}
      to={"/collections"}
    >
      <img
        css={css`
          height: 25px;
          width: 25px;
          object-fit: contain;
        `}
        src={IMAGES.bag}
        alt="bag icon"
      />
      <h1
        css={css`
          font-family: "whitney";
          font-size: 15px;
          color: #000;
        `}
      >
        my pokemons
      </h1>
    </Link>
  );
}
