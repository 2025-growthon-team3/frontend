import React from "react";
import * as D from "./Divider.style";

const Divider = ({ children }) => {
  return (
    <D.Container>
      <D.Line />
      <D.Content>{children}</D.Content>
    </D.Container>
  );
};

export default Divider;
