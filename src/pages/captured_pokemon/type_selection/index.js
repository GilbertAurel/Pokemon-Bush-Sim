/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import TypeCard from "./typeCard";

export default function typesSelection({
  types,
  selectedType,
  typeButtonHandler,
}) {
  return (
    <div
      css={css`
        height: 40px;
        min-height: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 90%;
          margin: auto;
          display: flex;
          flex-direction: row;
          gap: 10px;
          overflow-x: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <TypeCard
          name={"all"}
          selectedType={selectedType}
          typeButtonHandler={typeButtonHandler}
        />
        {types.map((type, index) => (
          <TypeCard
            key={`${type.name}-${index}`}
            name={type.name}
            selectedType={selectedType}
            typeButtonHandler={typeButtonHandler}
          />
        ))}
      </div>
    </div>
  );
}
