/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import RenderBackButton from "components/backButton";

export default function footerSection() {
  return (
    <div
      css={css`
        height: 80px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        @media (min-width: 1080px) {
          display: none;
        }
      `}
    >
      <RenderBackButton />
    </div>
  );
}
