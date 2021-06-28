/** @jsx jsx */
import { useContext, useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { SavedPokemonContext } from "../../context/PokemonContext";
import { COLORS } from "../../constants/theme";
import CustomButton from "../../components/button";

export default function popUpDialog({ dialogState, pokemonName }) {
  const [name, setName] = useState(null);
  const [isUnique, setIsUnique] = useState(true);
  const pageHistory = useHistory();
  const { savedPokemon, setSavedPokemon } = useContext(SavedPokemonContext);

  const inputChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
  };

  useEffect(() => {
    if (savedPokemon.includes(name)) return setIsUnique(false);

    return setIsUnique(true);
  }, [name]);

  const saveHandler = () => {
    if (!name) return alert("bad input");

    if (isUnique) {
      setSavedPokemon((prevData) => [...prevData, name]);
      pageHistory.goBack();
    }
  };

  const RenderButtons = () => {
    return (
      <div css={styles.buttonContainer}>
        <CustomButton
          onPressFunction={dialogState}
          title={"Cancel"}
          colorInput={COLORS.gray}
        />
        <CustomButton
          onPressFunction={saveHandler}
          title={"Save"}
          colorInput={COLORS.primary}
        />
      </div>
    );
  };

  const RenderUniqueAlert = () => {
    return (
      !isUnique && <h1 css={styles.notUniqueAlert}>name has been taken!</h1>
    );
  };

  return (
    <div css={styles.container}>
      <div css={styles.innerContainer}>
        <h1 css={styles.title}>Gotcha!</h1>
        <h1 css={styles.title}>name the pokemon</h1>
        <input
          css={styles.input}
          type="text"
          value={name}
          placeholder={pokemonName}
          onChange={(event) => inputChangeHandler(event)}
        />
        <RenderUniqueAlert />
        <RenderButtons />
      </div>
      <div css={styles.darkenBackground} onClick={() => dialogState()} />
    </div>
  );
}

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  darkenBackground: css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.7;
  `,
  innerContainer: css`
    width: 350px;
    padding: 30px 10px;
    border: 3px solid #000000;
    border-radius: 10px;
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-family: "dogica";
    font-size: 14px;
    line-height: 10px;
    color: #000000;
  `,
  input: css`
    width: 80%;
    padding: 5px 10px;
    margin: 20px 0;
    border: 3px solid #000;
    border-radius: 10px;
    font-family: "dogica";
    font-size: 12px;
  `,
  notUniqueAlert: css`
    font-family: "dogica";
    line-height: 10px;
    font-size: 12px;
  `,
  buttonContainer: css`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
};
