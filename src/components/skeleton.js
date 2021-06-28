/** @jsx jsx */
import React, { Fragment } from "react";
import { css, jsx } from "@emotion/react";

import { COLORS } from "../constants/theme";

export default function pokemonListCardSkeleton({ type }) {
  return (
    <div css={styles[type]}>
      <div css={styles.lightContainer}>
        <div css={styles.lightShimmer} />
      </div>
    </div>
  );
}

const styles = {
  cardList: css`
    height: 30px;
    width: 90%;
    position: relative;
    background-color: ${COLORS.gray};
    border-radius: 10px;
    text-decoration: none;

    h1 {
    }
  `,
  lightContainer: css`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: loading 1s infinite;

    @keyframes loading {
      0% {
        transform: translateX(-150%);
      }
      50% {
        transform: translateX(-60%);
      }
      100% {
        transform: translateX(150%);
      }
    }
  `,
  lightShimmer: css`
    height: 100%;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: skewX(-20deg);
  `,
};
