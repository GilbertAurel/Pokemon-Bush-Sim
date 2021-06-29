/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function uniqueAlert({ isUnique }) {
  return (
    !isUnique && (
      <h1
        css={css`
          font-family: "dogica";
          line-height: 10px;
          font-size: 12px;
        `}
      >
        name has been taken!
      </h1>
    )
  );
}
