/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";

import { COLORS } from "../constants/theme";

export default function pokemonListCard({ pokemon }) {
  return (
    <Link
      to={{
        pathname: `/pokemon/${pokemon.name}`,
        state: pokemon,
      }}
      css={styles.container}
    >
      <h1>{pokemon.name}</h1>
    </Link>
  );
}

const styles = {
  container: css`
    height: 30px;
    width: 90%;
    background-color: ${COLORS.primary};
    border-radius: 10px;
    text-decoration: none;
    border: 2px solid #000;

    h1 {
      text-align: center;
      font-family: "dogica";
      font-size: 12px;
      color: #000;
    }
  `,
};
