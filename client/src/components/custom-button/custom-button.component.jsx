import React from "react";

import { CustomButtonContainter } from "./custom-button.styles.jsx";
export const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainter {...props}>{children}</CustomButtonContainter>;
};
