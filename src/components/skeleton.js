/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";

import { COLORS } from "constants/theme";

export default function skeleton({ type }) {
  const loading = keyframes`
      0% {
        transform: translateX(-150%);
      }
      50% {
        transform: translateX(-60%);
      }
      100% {
        transform: translateX(150%);
      }
  `;

  return (
    <div css={styles[type]}>
      <div
        css={css`
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          animation: ${loading} 1s infinite;
        `}
      >
        <div
          css={css`
            height: 100%;
            width: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            transform: skewX(-20deg);
          `}
        />
      </div>
    </div>
  );
}

const styles = {
  cardList: css`
    height: 30px;
    min-height: 30px;
    width: 90%;
    position: relative;
    background-color: ${COLORS.gray};
    border-radius: 10px;
    text-decoration: none;
  `,
};
