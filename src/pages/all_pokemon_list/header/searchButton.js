/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

const BUTTON_TITLE = "search";

export default function searchButton() {
  return (
    <button
      css={css`
        height: 60%;
        width: 100px;
        padding: 5px 0;
        border-radius: 10px;
        border: none;
        background-color: ${COLORS.secondary};
        color: #fff;
        transition: 0.1s;

        :active {
          opacity: 0.9;
        }
      `}
    >
      {BUTTON_TITLE}
    </button>
  );
}
