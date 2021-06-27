import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCaptureButtons({ captureButtonHandler }) {
  return (
    <div>
      <h1>Whoa, we found it!</h1>
      <button onClick={() => captureButtonHandler()}>Save to context</button>
      <Link to={"/"}>Go back to home</Link>
    </div>
  );
}
