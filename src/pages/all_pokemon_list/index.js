/** @jsx jsx */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";

import { SavedPokemonContext } from "context/PokemonContext";

import PokemonScrollList from "./pokemon_list";
import HeaderSection from "./header";
import FooterSection from "./footer";

export default function pokemonList() {
  const { savedPokemon } = useContext(SavedPokemonContext);

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
      `}
    >
      <HeaderSection />
      <PokemonScrollList />
      <FooterSection savedPokemon={savedPokemon} />
    </div>
  );
}
