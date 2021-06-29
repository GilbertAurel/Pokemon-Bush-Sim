/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/react";

import { SavedPokemonContext } from "context/PokemonContext";

import PokemonList from "./pokemon_list";
import HeaderSection from "./header";
import FooterSection from "./footer";

export default function pokemonList() {
  const { savedPokemon } = useContext(SavedPokemonContext);

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        min-height: 700px;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
      `}
    >
      <HeaderSection />
      <PokemonList />
      <FooterSection savedPokemon={savedPokemon} />
    </div>
  );
}
