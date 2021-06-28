/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "../../constants/images";
import { COLORS } from "../../constants/theme";
import PokemonType from "../../components/pokemonType";
import PokemonMove from "../../components/pokemonMove";

export default function pokemonInfo({ sprites, name, types, moves }) {
  const RenderPokemonImage = () => {
    return (
      <div css={styles.imageContainer}>
        <img src={sprites.front_default} alt="" />
        <img src={IMAGES.shadow} alt="" />
      </div>
    );
  };

  const RenderTypes = () => {
    return (
      <div css={styles.attributesContainer}>
        <h1 css={styles.pokemonName}>{name}</h1>
        <section>
          {types.map((typeDoc, index) => (
            <PokemonType key={`type-${index}`} type={typeDoc.type} />
          ))}
        </section>
      </div>
    );
  };

  const RenderMoves = () => {
    return (
      <div css={styles.movesContainer}>
        <h2>Moves:</h2>
        <section>
          {moves.slice(0, 2).map((moveDoc, index) => (
            <PokemonMove key={`move-${index}`} move={moveDoc.move} />
          ))}
        </section>
      </div>
    );
  };

  return (
    <div css={styles.container}>
      <RenderPokemonImage />
      <RenderTypes />
      <RenderMoves />
    </div>
  );
}

const styles = {
  container: css`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  imageContainer: css`
    height: 350px;
    width: 350px;
    position: relative;

    img:first-of-type {
      height: 350px;
      width: 350px;
      object-fit: cover;
    }

    img:last-of-type {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      z-index: -1;
    }
  `,
  attributesContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }
  `,
  pokemonName: css`
    color: ${COLORS.primary};
    font-family: "Dogica";
    font-size: 20px;
    line-height: 15px;
    text-shadow: -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000,
      1px 1px 0 #000;
  `,
  movesContainer: css`
    margin-top: 50px;

    h2 {
      font-family: "dogica";
      font-size: 12px;
      line-height: 9px;
      color: ${COLORS.primary};
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }
  `,
};
