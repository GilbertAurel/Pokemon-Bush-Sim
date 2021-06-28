/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";

import { COLORS } from "../../constants/theme";
import IMAGE from "../../constants/images";

export default function pokemonCaptureButtons({ captureButtonHandler }) {
  return (
    <div css={styles.container}>
      <div css={styles.stripes}>
        <div />
        <div />
        <div />
      </div>
      <div css={styles.innerContainer}>
        <h1 css={styles.title}>Whoa, we found it!</h1>
        <button
          css={styles.captureButton}
          onClick={() => captureButtonHandler()}
        >
          <img src={IMAGE.pokeball} alt="" />
          <h1 css={styles.buttonLabel}>Capture</h1>
        </button>
        <Link css={styles.backButon} to={"/"}>
          <h1 css={styles.buttonLabel}>Go Back</h1>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    flex: 2;
    display: flex;
    flex-direction: column;
  `,
  stripes: css`
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
  `,
  innerContainer: css`
    flex: 1;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    background-color: #fff;
  `,
  title: css`
    font-family: "dogicapixelbold";
    font-size: 18px;
    line-height: 13px;
  `,
  captureButton: css`
    height: 40px;
    width: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.primary};
    border: 3px solid #000000;
    border-radius: 9px;

    img {
      height: 26px;
      width: 26px;
      position: absolute;
      left: 10px;
    }
  `,
  backButon: css`
    height: 30px;
    width: 179px;
    background-color: ${COLORS.gray};
    border: 3px solid #000000;
    border-radius: 9px;
    text-decoration: none;
    text-align: center;
  `,
  buttonLabel: css`
    font-family: "dogicapixelbold";
    font-size: 14px;
    line-height: 10px;
    color: #000;
  `,
};
