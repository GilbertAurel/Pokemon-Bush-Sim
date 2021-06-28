/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

import { COLORS } from "../../constants/theme";

export default function popUpDialog({ dialogState, saveToContext }) {
  return (
    <div css={styles.container}>
      <div css={styles.innerContainer}>
        <h1 css={styles.title}>Gotcha!</h1>
        <h1 css={styles.title}>name the pokemon</h1>
        <input type="text" />
        <div>
          <button onClick={() => saveToContext()}>save</button>
          <button onClick={() => dialogState()}>cancel</button>
        </div>
      </div>
      <div css={styles.darkenBackground} onClick={() => dialogState()} />
    </div>
  );
}

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  darkenBackground: css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.7;
  `,
  innerContainer: css`
    height: 150px;
    width: 350px;
    padding: 0 10px;
    border: 3px solid #000000;
    border-radius: 10px;
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-family: "dogica";
    font-size: 14px;
    line-height: 10px;
    color: #000000;
  `,
};

//todo: add name to saved pokemon
