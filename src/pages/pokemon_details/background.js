/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";

export default function background({ types }) {
  return (
    <img
      css={css`
        height: 100%;
        min-height: 700px;
        width: 100%;
        position: absolute;
        top: -100px;
        left: 0;
        right: 0;
        z-index: -1;
        object-fit: cover;
      `}
      src={
        types.some((typeDoc) => typeDoc.type.name === "water")
          ? IMAGES.waterBG
          : IMAGES.detailBG
      }
      alt="background"
    />
  );
}
