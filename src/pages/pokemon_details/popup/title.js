/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Fragment } from "react";

export default function title() {
  return (
    <Fragment>
      <h1
        css={css`
          font-family: "dogica";
          font-size: 14px;
          line-height: 10px;
          color: #000000;
        `}
      >
        Gotcha!
      </h1>
      <h1
        css={css`
          font-family: "dogica";
          font-size: 14px;
          line-height: 10px;
          color: #000000;
        `}
      >
        name the pokemon
      </h1>
    </Fragment>
  );
}
