/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { COLORS } from "constants/theme";
import CustomButton from "components/button";

export default function buttons({ dialogState, saveHandler }) {
  return (
    <div
      css={css`
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
      `}
    >
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
}
