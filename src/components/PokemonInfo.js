/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

import IMAGES from "../constants/images";
import { COLORS } from "../constants/theme";

export default function PokemonInfo({ sprites, name, types, moves }) {
  return (
    <div css={styles.container}>
      <div css={styles.pokemonImage}>
        <img src={sprites.front_default} alt="" />
        <img src={IMAGES.shadow} alt="" />
      </div>
      <div css={styles.pokemonAttributes}>
        <h1>{name}</h1>
        <section>
          {types.map((typeDoc, index) => (
            <div key={`type-${index}`}>{typeDoc.type.name}</div>
          ))}
        </section>
      </div>
      <div>
        <h2>Moves</h2>
        {moves.slice(0, 2).map((moveDoc, index) => (
          <div key={`move-${index}`}>{moveDoc.move.name}</div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: css`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  pokemonImage: css`
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
  pokemonAttributes: css`
    h1 {
      color: ${COLORS.primary};
      font-family: "Dogica";
      font-size: 20px;
      line-height: 15px;
      text-shadow: -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000,
        1px 1px 0 #000;
    }
  `,
};
