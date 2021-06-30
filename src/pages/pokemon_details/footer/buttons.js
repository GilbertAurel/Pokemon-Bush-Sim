/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";
import { COLORS } from "constants/theme";
import RenderBackButton from "components/backButton";

export default function buttons({
  captureState,
  buttonHandler,
  failedAttempts,
}) {
  return (
    <div
      css={css`
        flex: 1;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        align-items: center;
        background-color: #fff;
      `}
    >
      <h1
        css={css`
          font-family: "dogicapixelbold";
          font-size: 18px;
          line-height: 13px;
        `}
      >
        Whoa, we found it!
      </h1>
      <button
        css={css`
          height: 40px;
          width: 300px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${COLORS.primary};
          border: 3px solid #000000;
          border-radius: 9px;

          img {
            height: 26px;
            width: 26px;
            position: absolute;
            left: 10px;
          }
        `}
        onClick={() => buttonHandler()}
      >
        <img src={IMAGES.pokeball} alt="" />
        <h1
          css={css`
            font-family: "whitneybold";
            font-size: 18px;
            line-height: 10px;
            color: #000;
          `}
        >
          {!captureState ? "Capture" : `Try again ${failedAttempts}`}
        </h1>
      </button>
      <RenderBackButton />
    </div>
  );
}
