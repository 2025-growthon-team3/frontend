import React from "react";
import * as C from "./CompleteModal.style";

// image
import logo from "../../assets/images/logo.png";
import x from "../../assets/images/xmark.png";

const CompleteModal = ({ children, onClick }) => {
  return (
    <C.Container onClick={onClick}>
      <C.ModalBox>
        <C.CloseButton>
          <C.CloseIcon src={x} alt="Close" />
        </C.CloseButton>
        <C.Logo src={logo} alt="Logo" />
        <C.MessageBox>
          <C.Message>{children}</C.Message>
        </C.MessageBox>
      </C.ModalBox>
    </C.Container>
  );
};

export default CompleteModal;
