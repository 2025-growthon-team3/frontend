import React, { useState } from "react";
import * as S from "./SignUpPage.style";
import TargetButton from "../../components/LoginPage/TargetButton/TargetButton";
import TextField from "../../components/LoginPage/TextField/TextField";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <S.Container>
      <TargetButton title="온기" size="152px">
        도움을 구하는 기관
      </TargetButton>
      <S.TextFieldContainer>
        <TextField
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <TextField
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="기관명"
        />
        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="위치"
        />
      </S.TextFieldContainer>
      <S.Line />
      <LoginButton color="mint">회원 가입</LoginButton>
    </S.Container>
  );
};

export default SignUpPage;
