/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import PokemonType from "components/pokemonType";
import { COLORS } from "constants/theme";

export default function typesSection({ types, name }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
      `}
    >
      <h1
        css={css`
          color: ${COLORS.primary};
          font-family: "Dogica";
          font-size: 20px;
          line-height: 15px;
          text-shadow: -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000,
            1px 1px 0 #000;
        `}
      >
        {name}
      </h1>
      <section>
        {types.map((typeDoc, index) => (
          <PokemonType key={`type-${index}`} type={typeDoc.type} />
        ))}
      </section>
    </div>
  );
}
