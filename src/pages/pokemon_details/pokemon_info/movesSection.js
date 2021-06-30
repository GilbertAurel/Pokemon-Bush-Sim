/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import PokemonMove from "./moveCard";
import { COLORS } from "constants/theme";

export default function movesSection({ moves }) {
  return (
    <div
      css={css`
        margin: 50px 0;

        h2 {
          font-family: "dogica";
          font-size: 12px;
          line-height: 9px;
          color: ${COLORS.primary};
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        }

        section {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
      `}
    >
      <h2>Moves:</h2>
      <section>
        {moves.slice(0, 2).map((moveDoc, index) => (
          <PokemonMove key={`move-${index}`} move={moveDoc.move} />
        ))}
      </section>
    </div>
  );
}
