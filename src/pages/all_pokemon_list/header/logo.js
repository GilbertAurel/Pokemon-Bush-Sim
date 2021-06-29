/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function logoSection() {
  return (
    <img
      css={css`
        height: 90px;
        margin-bottom: 20px;
        z-index: 1;
      `}
      src={IMAGES.logo}
      alt="pokemon bush simulator logo"
    />
  );
}
