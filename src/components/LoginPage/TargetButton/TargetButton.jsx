import React from "react";
import * as T from "./TargetButton.style";

const TargetButton = ({ children, title, size, onClick }) => {
  return (
    <T.Container title={title} size={size} onClick={onClick}>
      <T.Title>{title}</T.Title>
      <T.Content>{children}</T.Content>
    </T.Container>
  );
};

export default TargetButton;
