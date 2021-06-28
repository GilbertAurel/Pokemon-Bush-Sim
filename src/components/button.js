/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { COLORS } from "../constants/theme";

export default function button({ title, onPressFunction, colorInput }) {
  return (
    <button
      css={css`
        height: 30px;
        width: 100px;
        background-color: ${colorInput};
        border: 2px solid #000;
        border-radius: 10px;
        font-family: "dogica";
        font-size: 12px;
      `}
      onClick={() => onPressFunction()}
    >
      {title}
    </button>
  );
}
