/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

import { COLORS } from "../constants/theme";

export default function pokemonMove({ move }) {
  return (
    <div css={styles.container}>
      <h1>{move.name}</h1>
    </div>
  );
}

const styles = {
  container: css`
    width: 150px;
    height: 40px;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "dogica";
      font-size: 12px;
      line-height: 9px;
    }
  `,
};
