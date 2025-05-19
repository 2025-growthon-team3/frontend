import React from "react";
import * as T from "./TitleBox.style";

const TitleBox = ({ children, color }) => {
  return <T.Container color={color}>{children}</T.Container>;
};

export default TitleBox;
