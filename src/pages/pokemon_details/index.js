/** @jsx jsx */
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { css, jsx } from "@emotion/react";

import { GET_ONE_POKEMON_QUERY } from "constants/queries";

import LoadingPage from "components/loadingPage";
import ErrorPage from "components/errorPage";
import InfoSection from "./pokemon_info";
import BottomSection from "./footer";
import PopupDialog from "./popup";
import RenderBackground from "./background";

function pokemonDetail(props) {
  const { name } = props.match.params;
  const [captureDialog, setCaptureDialog] = useState(false);
  const [failedToCapture, setFailedToCapture] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const { loading, error, data } = useQuery(GET_ONE_POKEMON_QUERY, {
    variables: { name: name },
  });
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  const { types, sprites, moves } = data.pokemon;

  const captureButtonHandler = () => {
    if (Math.floor(Math.random() * 2) === 1) {
      setFailedToCapture(false);
      setFailedAttempts(0);
      return setCaptureDialog((prevState) => !prevState);
    }

    setFailedAttempts((prevData) => prevData + 1);
    setFailedToCapture(true);
  };

  const RenderBody = () => {
    return (
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        `}
      >
        <InfoSection
          types={types}
          sprites={sprites}
          moves={moves}
          name={name}
        />
        <BottomSection
          captureState={failedToCapture}
          buttonHandler={captureButtonHandler}
          failedAttempts={failedAttempts}
        />
      </div>
    );
  };

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: relative;
      `}
    >
      <RenderBackground types={types} />
      <RenderBody />
      {captureDialog && (
        <PopupDialog
          dialogState={() => setCaptureDialog((prevState) => !prevState)}
          pokemonName={name}
          sprites={sprites}
          types={types}
        />
      )}
    </div>
  );
}

export default withRouter(pokemonDetail);
