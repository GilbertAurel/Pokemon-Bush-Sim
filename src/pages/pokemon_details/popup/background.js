/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function background({ dialogState }) {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.7;
      `}
      onClick={() => dialogState()}
    />
  );
}
