/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function button({ title, onPressFunction, colorInput }) {
  return (
    <button
      css={css`
        height: 30px;
        width: 100px;
        background-color: ${colorInput};
        border: 2px solid #000;
        border-radius: 10px;
        font-family: "whitneybold";
        font-size: 18px;
      `}
      onClick={() => onPressFunction()}
    >
      {title}
    </button>
  );
}
