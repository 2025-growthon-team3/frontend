import React from "react";
import * as T from "./TargetButton.style";

const TargetButton = ({ children, title }) => {
  return (
    <T.Container title={title}>
      <T.Title>{title}</T.Title>
      <T.Content>{children}</T.Content>
    </T.Container>
  );
};

export default TargetButton;
