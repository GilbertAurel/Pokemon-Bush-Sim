/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import RenderBackButton from "components/backButton";

export default function footerSection() {
  return (
    <div
      css={css`
        height: 150px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        p {
          padding: 0;
          margin: 10px 0;
          font-family: "whitney";
          font-size: 16px;
        }

        @media (min-width: 1080px) {
          display: none;
        }
      `}
    >
      <p>tap pokemon to release</p>
      <RenderBackButton />
    </div>
  );
}
