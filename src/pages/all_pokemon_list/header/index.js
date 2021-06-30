/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import IMAGES from "constants/images";
import DarkShader from "components/darkShader";
import RenderTitleBar from "./titleBar";
import RenderLogo from "./logo";

export default function headerSection() {
  return (
    <div
      css={css`
        height: 300px;
        min-height: 200px;
        width: 100%;
        margin-bottom: 50px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${IMAGES.headerBG});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      `}
    >
      <DarkShader />
      <RenderLogo />
      <RenderTitleBar />
    </div>
  );
}
