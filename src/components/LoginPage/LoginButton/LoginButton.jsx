import React from "react";
import * as L from "./LoginButton.style";

const LoginButton = ({ children, color }) => {
  return <L.Container color={color}>{children}</L.Container>;
};

export default LoginButton;
