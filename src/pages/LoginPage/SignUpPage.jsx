import React, { useState } from "react";
import * as S from "./SignUpPage.style";
import axios from "axios";

// component
import TargetButton from "../../components/LoginPage/TargetButton/TargetButton";
import TextField from "../../components/LoginPage/TextField/TextField";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [location, setLocation] = useState("");

  const handleSignUp = async () => {
    const kakaoId = localStorage.getItem("kakaoId");

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/signup/institution`,
        {
          institutionName: orgName,
          kakaoId: kakaoId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("회원가입 성공", response.data);
      const token = response.data.data.accessToken;
      localStorage.setItem("accessToken", token);

      navigate("/home/ongi");
    } catch (error) {
      console.error("회원가입 실패", error);
      console.error(error.response?.data?.message);
    }
  };

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
          disabled={true}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={true}
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
          disabled={true}
        />
      </S.TextFieldContainer>
      <S.Line />
      <LoginButton color="mint" onClick={handleSignUp}>
        회원 가입
      </LoginButton>
    </S.Container>
  );
};

export default SignUpPage;
