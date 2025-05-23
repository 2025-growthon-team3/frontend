import React from "react";
import * as L from "./LoginButton.style";

const LoginButton = ({ children, color, onClick }) => {
  return (
    <L.Container color={color} onClick={onClick}>
      {children}
    </L.Container>
  );
};

export default LoginButton;
