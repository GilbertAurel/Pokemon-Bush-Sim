/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import { COLORS } from "constants/theme";

export default function footer() {
  return (
    <Link
      css={css`
        height: 30px;
        width: 179px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${COLORS.gray};
        border: 3px solid #000000;
        border-radius: 9px;
        text-decoration: none;
      `}
      to={"/"}
    >
      <h1
        css={css`
          margin: auto;
          font-family: "whitneybold";
          font-size: 18px;
          line-height: 10px;
          color: #000;
        `}
      >
        Go Back
      </h1>
    </Link>
  );
}
