import React from "react";
import * as L from "./LoginButton.style";

const LoginButton = ({ children }) => {
  return <L.Container>{children}</L.Container>;
};

export default LoginButton;
