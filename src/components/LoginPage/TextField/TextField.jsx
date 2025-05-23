import React from "react";
import * as T from "./TextField.style";

const TextField = ({ value, onChange, placeholder, disabled }) => {
  const isPassword = placeholder === "Password";

  return (
    <T.Container $disabled={disabled}>
      <T.TextField
        value={value}
        onChange={onChange}
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        disabled={disabled}
      />
    </T.Container>
  );
};

export default TextField;
