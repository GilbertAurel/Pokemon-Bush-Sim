/** @jsx jsx */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { css, jsx } from "@emotion/react";

import { GET_TEN_OFFSET_POKEMONS_QUERY } from "../../constants/queries";
import { SavedPokemonContext } from "../../context/PokemonContext";
import PokemonListCard from "../../components/pokemonListCard";
import { COLORS } from "../../constants/theme";
import IMAGES from "../../constants/images";

export default function pokemonList() {
  const [currentPage, setCurrentPage] = useState(0);
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);
  const itemPerPage = 10;

  const { loading, error, data } = useQuery(GET_TEN_OFFSET_POKEMONS_QUERY, {
    variables: { limit: itemPerPage, currentPage: currentPage },
  });

  if (loading) return <h1>loading..</h1>;
  if (error) return <h1>data fetch error</h1>;

  return (
    <div css={styles.container}>
      <div css={styles.headerContainer}>
        <div css={styles.whiteGradient} />
        <img src={IMAGES.headerBG} alt="header background" />
        <img css={styles.logo} src={IMAGES.logo} alt="header logo" />
      </div>
      <div css={styles.pokemonListContainer}>
        {data.pokemons.results.map((pokemon) => (
          <PokemonListCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <h1>{savedPokemon.length}</h1>
      <div>
        <button onClick={() => setCurrentPage(data.pokemons.prevOffset)}>
          prev
        </button>
        <button onClick={() => setCurrentPage(data.pokemons.nextOffset)}>
          next
        </button>
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
  pokemonListContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
};
