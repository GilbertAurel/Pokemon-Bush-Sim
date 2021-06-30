/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function pokemonImage({ sprites }) {
  return (
    <div
      css={css`
        height: 350px;
        width: 350px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img:first-of-type {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        img:last-of-type {
          width: 100%;
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          z-index: -1;
        }

        @media (max-height: 800px) {
          height: 250px;
          width: 250px;
        }
      `}
    >
      <img src={sprites.front_default} alt="" />
      <img src={IMAGES.shadow} alt="" />
    </div>
  );
}
