/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import { useQuery } from "@apollo/client";

import { GET_TEN_OFFSET_POKEMONS_QUERY } from "../../constants/queries";
import IMAGES from "../../constants/images";
import PokemonListCard from "../../components/pokemonListCard";
import ErrorPage from "../../components/errorPage";
import PokemonListSkeleton from "./pokemonListSkeleton";

const ITEM_PER_PAGE = 15;

export default function pokemonScrollList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  const { loading, error, data } = useQuery(GET_TEN_OFFSET_POKEMONS_QUERY, {
    variables: { limit: ITEM_PER_PAGE, currentPage: currentPage },
  });

  useEffect(() => {
    if (data) {
      setPokemons((prevData) => [...prevData, ...data.pokemons.results]);
      setFirstLoad(false);
    }
  }, [data]);

  if (error) return <ErrorPage />;

  const scrollHandler = (event) => {
    const atBottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;

    if (atBottom) {
      return setCurrentPage(data.pokemons.nextOffset);
    }
  };

  return (
    <div css={styles.container} onScroll={(event) => scrollHandler(event)}>
      {firstLoad ? (
        <PokemonListSkeleton />
      ) : (
        pokemons.map((pokemon) => (
          <PokemonListCard key={pokemon.name} pokemon={pokemon} />
        ))
      )}
      <div css={styles.loading}>
        <img src={IMAGES.pokeball} alt="" />
        <h1>loading</h1>
      </div>
    </div>
  );
}

const styles = {
  container: css`
    height: 250px;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `,
  loading: css`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      height: 20px;
      width: 20px;
    }

    h1 {
      font-family: "dogica";
      font-size: 12px;
      color: #000;
    }
  `,
};
