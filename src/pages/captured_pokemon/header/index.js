/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { COLORS } from "constants/theme";
import RenderBackButton from "components/backButton";
import RenderTitle from "./title";

export default function headerSection() {
  return (
    <div
      css={css`
        height: 100px;
        min-height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: ${COLORS.primary};
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

        @media (min-width: 1080px) {
          justify-content: space-between;
        }
      `}
    >
      <RenderTitle />
      <div
        css={css`
          display: none;

          p {
            padding: 0;
            margin: 10px 0;
            font-family: "whitney";
            font-size: 16px;
          }

          @media (min-width: 1080px) {
            display: flex;
            gap: 20px;
            margin-right: 5%;
          }
        `}
      >
        <p>tap pokemon to release</p>
        <RenderBackButton />
      </div>
    </div>
  );
}
