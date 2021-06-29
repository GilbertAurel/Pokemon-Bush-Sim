/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import RenderStripes from "./stripes";
import RenderButtons from "./buttons";

export default function pokemonCaptureButtons(props) {
  return (
    <div
      css={css`
        flex: 2;
        display: flex;
        flex-direction: column;
      `}
    >
      <RenderStripes />
      <RenderButtons {...props} />
    </div>
  );
}
