/** @jsx jsx */
import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { css, jsx } from "@emotion/react";

import { GET_ONE_POKEMON_QUERY } from "../constants/queries";
import IMAGES from "../constants/images";
import { SavedPokemonContext } from "../context/PokemonContext";
import PokemonInfo from "../components/PokemonInfo";
import PokemonCaptureButtons from "../components/PokemonCaptureButtons";

function pokemonDetail(props) {
  const { name } = props.location.state;
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);
  const { loading, error, data } = useQuery(GET_ONE_POKEMON_QUERY, {
    variables: { name: name },
  });

  if (loading) return <h1>loading..</h1>;

  if (error) return <h1>data fetch error</h1>;

  const { types, sprites, moves, id } = data.pokemon;

  const captureButtonHandler = () => {
    if (Math.floor(Math.random() * 2) === 1) {
      setSavedPokemon((prevData) => [...prevData, name]);
      console.log("captured");
    }
    console.log("try again!");
  };

  return (
    <div css={styles.container}>
      <img
        css={styles.backgroundImage}
        src={IMAGES.detailBG}
        alt="background"
      />
      <div css={styles.bodyContainer}>
        <PokemonInfo
          types={types}
          sprites={sprites}
          moves={moves}
          name={name}
        />
        <PokemonCaptureButtons captureButtonHandler={captureButtonHandler} />
      </div>
    </div>
  );
}

export default withRouter(pokemonDetail);

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
  `,
  backgroundImage: css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    object-fit: cover;
  `,
  bodyContainer: css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  `,
};
