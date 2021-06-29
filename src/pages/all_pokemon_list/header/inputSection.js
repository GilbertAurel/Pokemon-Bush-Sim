/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const INPUT_PLACEHOLDER = "search pokemon..";

export default function inputSection() {
  return (
    <input
      css={css`
        flex: 1;
        height: 60%;
        padding: 0 10px;
        background-color: #f6f6f6;
        border-radius: 10px;
        border: none;

        :focus {
          outline: none;
        }
      `}
      placeholder={INPUT_PLACEHOLDER}
      type="text"
    />
  );
}
