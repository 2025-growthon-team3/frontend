import React from "react";
import * as S from "./SignUpPage.style";
import TargetButton from "../../components/LoginPage/TargetButton/TargetButton";
import TextField from "../../components/LoginPage/TextField/TextField";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";

const SignUpPage = () => {
  return (
    <S.Container>
      <TargetButton title="온기" size="152px">
        도움을 구하는 기관
      </TargetButton>
      <S.TextFieldContainer>
        <TextField>ID</TextField>
        <TextField>Password</TextField>
        <TextField>기관명</TextField>
        <TextField>위치</TextField>
      </S.TextFieldContainer>
      <S.Line />
      <LoginButton color="mint">회원 가입</LoginButton>
    </S.Container>
  );
};

export default SignUpPage;
