/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function darkShader() {
  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: 0;
      `}
    />
  );
}
