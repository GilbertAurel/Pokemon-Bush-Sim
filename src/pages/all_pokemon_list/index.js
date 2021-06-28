/** @jsx jsx */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";

import { SavedPokemonContext } from "../../context/PokemonContext";
import { COLORS } from "../../constants/theme";
import IMAGES from "../../constants/images";

import PokemonScrollList from "./pokemonScrollList";

export default function pokemonList() {
  const { savedPokemon } = useContext(SavedPokemonContext);

  return (
    <div css={styles.container}>
      <div css={styles.headerContainer}>
        <div css={styles.whiteGradient} />
        <img src={IMAGES.headerBG} alt="header background" />
        {/* <img css={styles.logo} src={IMAGES.logo} alt="header logo" /> */}
      </div>
      <PokemonScrollList />
      <div>
        <h1>{savedPokemon.length}</h1>
        {/* <button onClick={() => setCurrentPage(data.pokemons.prevOffset)}>
          prev
        </button>
        <button onClick={() => setCurrentPage(data.pokemons.nextOffset)}>
          next
        </button> */}
        <Link to={"/collections"}>Go to my pokemon</Link>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    background-color: #fff;
  `,
  headerContainer: css`
    height: 150px;
    width: 100%;
    position: relative;

    img:first-of-type {
      height: inherit;
      width: inherit;
      object-fit: cover;
    }
  `,
  whiteGradient: css`
    height: 150px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(transparent, rgba(255, 255, 255, 1));
    background-color: transparent;
  `,
  logo: css`
    height: 120px;
  `,
};
