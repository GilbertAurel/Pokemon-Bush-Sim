/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import OwnedPokemonSection from "./ownedPokemon";
import MyPokemonButton from "./myPokemonButton";
import RenderGrass from "./grass";

export default function footerList({ savedPokemon }) {
  return (
    <div
      css={css`
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          flex: 1;
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 50px;
        `}
      >
        <OwnedPokemonSection savedPokemon={savedPokemon} />
        <MyPokemonButton />
      </div>
      <RenderGrass />
    </div>
  );
}
