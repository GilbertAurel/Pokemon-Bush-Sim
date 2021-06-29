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

        img:first-of-type {
          height: 350px;
          width: 350px;
          object-fit: cover;
        }

        img:last-of-type {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          z-index: -1;
        }
      `}
    >
      <img src={sprites.front_default} alt="" />
      <img src={IMAGES.shadow} alt="" />
    </div>
  );
}
