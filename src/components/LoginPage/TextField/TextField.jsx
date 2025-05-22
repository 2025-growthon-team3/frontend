import React from "react";
import * as T from "./TextField.style";

const TextField = ({ value, onChange, placeholder }) => {
  const isPassword = placeholder === "Password";

  return (
    <T.Container>
      <T.TextField
        value={value}
        onChange={onChange}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
      />
    </T.Container>
  );
};

export default TextField;
