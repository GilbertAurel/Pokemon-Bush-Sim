/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export default function searchBar() {
  return (
    <div
      css={css`
        height: 50px;
        width: 100%;
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        z-index: 10;
      `}
    >
      <div
        css={css`
          height: 100%;
          width: 90%;
          max-width: 900px;
          padding: 0 10px;
          margin: auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          z-index: 100;

          h1 {
            font-family: "dogica";
            font-size: 12px;

            @media (max-width: 450px) {
              font-size: 10px;
            }
          }
        `}
      >
        <h1>Scroll and pick your Pokemon!</h1>
      </div>
    </div>
  );
}
