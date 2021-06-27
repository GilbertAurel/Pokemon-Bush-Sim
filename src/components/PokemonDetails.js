/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

export default function PokemonDetails({ sprites, name, types, moves }) {
  return (
    <div css={styles.container}>
      <div>
        <img src={sprites.front_default} alt="" />
        <div />
      </div>
      <div>
        <h1>{name}</h1>
        <section>
          {types.map((typeDoc) => (
            <h2>{typeDoc.type.name}</h2>
          ))}
        </section>
      </div>
      <div>
        <h2>Moves</h2>
        {moves.slice(0, 2).map((docs) => (
          <h1>{docs.move.name}</h1>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: css`
    flex: 5;
  `,
};
