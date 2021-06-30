/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function errorPage() {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        css={css`
          height: 50px;
          width: 50px;
        `}
        src={IMAGES.pokeball}
        alt="pokeball"
      />
      <h1
        css={css`
          width: 80%;
          font-family: "dogica";
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        `}
      >
        Uh oh something is not right!
      </h1>
    </div>
  );
}
