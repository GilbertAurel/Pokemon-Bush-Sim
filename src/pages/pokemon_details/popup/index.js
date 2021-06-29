/** @jsx jsx */
import { useContext, useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { SavedPokemonContext } from "context/PokemonContext";
import RenderUniqueAlert from "./uniqueAlert";
import RenderButtons from "./buttons";
import RenderDarkenBackground from "./background";
import RenderTitle from "./title";

export default function popUpDialog({ dialogState, pokemonName }) {
  const [name, setName] = useState("");
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
    if (!name) return setIsUnique(false);

    if (isUnique) {
      setSavedPokemon((prevData) => [...prevData, name]);
      pageHistory.goBack();
    }
  };

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 90%;
          max-width: 450px;
          padding: 30px 10px;
          border: 3px solid #000000;
          border-radius: 10px;
          background-color: #fff;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <RenderTitle />
        <input
          css={css`
            width: 80%;
            padding: 5px 10px;
            margin: 20px 0;
            border: 3px solid #000;
            border-radius: 10px;
            font-family: "dogica";
            font-size: 12px;

            :focus {
              outline: none;
            }
          `}
          type="text"
          value={name}
          placeholder={pokemonName}
          onChange={(event) => inputChangeHandler(event)}
        />
        <RenderUniqueAlert isUnique={isUnique} />
        <RenderButtons saveHandler={saveHandler} dialogState={dialogState} />
      </div>
      <RenderDarkenBackground dialogState={dialogState} />
    </div>
  );
}
