/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function stripes() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 3px;

        div:nth-of-type(1) {
          height: 3px;
          width: 100%;
          background-color: #000;
        }

        div:nth-of-type(2) {
          height: 7px;
          width: 100%;
          background-color: #000;
        }

        div:nth-of-type(3) {
          height: 8px;
          width: 100%;
          background-color: #000;
        }
      `}
    >
      <div />
      <div />
      <div />
    </div>
  );
}
