/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function loadingPage() {
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
          animation-name: spin;
          animation-duration: 500ms;
          animation-iteration-count: infinite;
          animation-timing-function: linear;

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
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
        Loading
      </h1>
    </div>
  );
}
