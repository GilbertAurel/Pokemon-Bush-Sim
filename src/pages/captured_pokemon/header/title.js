/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function titleSection() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img {
          height: 25px;
          width: 25px;
        }

        h1 {
          font-family: "dogica";
          font-size: 12px;
        }

        @media (min-width: 1080px) {
          margin-left: 5%;

          h1 {
            font-size: 16px;
          }
        }
      `}
    >
      <img src={IMAGES.pokeball} alt="" />
      <h1>My Pokemons</h1>
    </div>
  );
}
