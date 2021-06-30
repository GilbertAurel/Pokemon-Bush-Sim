/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { SavedPokemonContext } from "context/PokemonContext";
import { GET_ALL_TYPES } from "constants/queries";

import RenderError from "components/errorPage";
import RenderLoading from "components/loadingPage";
import RenderHeader from "./header";
import RenderTypesSelection from "./type_selection";
import RenderPokemonList from "./pokemon_list";
import RenderFooter from "./footer";

export default function myPokemonList() {
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPokemon, setSelectedPokemon] = useState(savedPokemon);

  const { loading, error, data } = useQuery(GET_ALL_TYPES);

  useEffect(() => {
    if (selectedType === "all") return setSelectedPokemon(savedPokemon);

    const newSelectedPokemon = savedPokemon.filter((pokemon) =>
      pokemon.types.some((typeDoc) => typeDoc.type.name === selectedType)
    );

    setSelectedPokemon(newSelectedPokemon);
  }, [selectedType, savedPokemon]);

  if (loading) return <RenderLoading />;
  if (error) return <RenderError />;

  const typeButtonHandler = (type) => {
    setSelectedType(type);
  };

  const releasePokemonHandler = (nameInput) => {
    setSavedPokemon((prevData) =>
      prevData.filter((pokemon) => pokemon.name !== nameInput)
    );
  };

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <RenderHeader />
      <RenderTypesSelection
        types={data.types.results}
        selectedType={selectedType}
        typeButtonHandler={typeButtonHandler}
      />
      <RenderPokemonList
        savedPokemon={selectedPokemon}
        releasePokemonHandler={releasePokemonHandler}
      />
      <RenderFooter />
    </div>
  );
}
