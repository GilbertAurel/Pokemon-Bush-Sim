/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

import IMAGES from "../constants/images";

export default function errorPage() {
  return (
    <div css={styles.container}>
      <img css={styles.pokeballImg} src={IMAGES.pokeball} alt="pokeball" />
      <h1 css={styles.errorMsg}>Uh oh something is not right!</h1>
    </div>
  );
}

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  pokeballImg: css`
    height: 50px;
    width: 50px;
  `,
  errorMsg: css`
    width: 80%;
    font-family: "dogica";
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  `,
};
