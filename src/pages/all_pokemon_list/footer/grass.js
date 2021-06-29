/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import IMAGES from "constants/images";

export default function grass() {
  return (
    <div
      css={css`
        height: 80px;
        width: 100%;
        background-image: url(${IMAGES.bush});
        background-position: center;
        background-size: contain;
        background-repeat: repeat-x;
      `}
    />
  );
}
