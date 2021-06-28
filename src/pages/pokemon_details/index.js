/** @jsx jsx */
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { css, jsx } from "@emotion/react";

import { GET_ONE_POKEMON_QUERY } from "../../constants/queries";
import IMAGES from "../../constants/images";

import LoadingPage from "../../components/loadingPage";
import ErrorPage from "../../components/errorPage";
import InfoSection from "./infoSection";
import BottomSection from "./bottomSection";
import PopupDialog from "./popupDialog";

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

  const RenderBackground = () => {
    return types.some((typeDoc) => typeDoc.type.name === "water") ? (
      <img css={styles.backgroundImage} src={IMAGES.waterBG} alt="background" />
    ) : (
      <img
        css={styles.backgroundImage}
        src={IMAGES.detailBG}
        alt="background"
      />
    );
  };

  const RenderBody = () => {
    return (
      <div css={styles.bodyContainer}>
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
    <div css={styles.container}>
      <RenderBackground />
      <RenderBody />
      {captureDialog && (
        <PopupDialog
          dialogState={() => setCaptureDialog((prevState) => !prevState)}
          pokemonName={name}
        />
      )}
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
    top: -100px;
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
