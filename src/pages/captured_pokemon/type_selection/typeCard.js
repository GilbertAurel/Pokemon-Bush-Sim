/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { COLORS } from "constants/theme";

export default function typeCard({ name, selectedType, typeButtonHandler }) {
  return (
    <div
      css={css`
        padding: 0 20px;
        background-color: ${name === selectedType ? COLORS.secondary : "#fff"};
        border-radius: 20px;
        border: 1px solid #dadada;
        cursor: pointer;

        :hover {
          border: 1px solid ${COLORS.secondary};
        }

        :active {
          border: 1px solid ${COLORS.secondary};
        }

        p {
          padding: 1px 0;
          margin: 0;
          font-family: "whitney";
          font-size: 14px;
          color: ${name === selectedType ? "#fff" : "#000"};
        }
      `}
      onClick={() => typeButtonHandler(name)}
    >
      <p>{name}</p>
    </div>
  );
}
