/** @jsx jsx */
import { useState, useEffect, Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { useQuery } from "@apollo/client";

import { GET_TEN_OFFSET_POKEMONS_QUERY } from "constants/queries";
import ErrorPage from "components/errorPage";

import PokemonListSkeleton from "./listSkeleton";
import PokemonList from "./list";

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

  return (
    <Fragment>
      {firstLoad ? (
        <div
          css={css`
            flex: 1;
            min-height: 250px;
            width: 100%;
            max-width: 900px;
            overflow: scroll;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          `}
        >
          <PokemonListSkeleton />
        </div>
      ) : (
        <PokemonList
          data={data}
          pokemons={pokemons}
          setCurrentPage={setCurrentPage}
        />
      )}
    </Fragment>
  );
}
