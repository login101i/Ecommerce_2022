import React from "react";
import "./with-spinner.styles";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

export const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
