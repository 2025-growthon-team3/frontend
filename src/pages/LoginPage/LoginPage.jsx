import React from "react";
import * as L from "./LoginPage.style";

// image
import logo from "../../assets/images/logo.png";
import kakao from "../../assets/images/logo_kakao.png";

// component
import TextField from "../../components/LoginPage/TextField/TextField";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";
import Divider from "../../components/LoginPage/Divider/Divider";

const LoginPage = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const KakaoLoginHandler = () => {
    window.location.href = link;
  };

  return (
    <L.Container>
      <L.Logo src={logo} alt="logo" />
      <L.TextFieldContainer>
        <TextField>ID</TextField>
        <TextField>Password</TextField>
        <L.ForgetPassword>Forget Password ?</L.ForgetPassword>
      </L.TextFieldContainer>
      <LoginButton color="orange">Login</LoginButton>
      <Divider>Or sign up with</Divider>
      <L.KakaoButton onClick={KakaoLoginHandler}>
        <img src={kakao} alt="kakao" />
      </L.KakaoButton>
      <L.CreateContainer>
        Not register yet?
        <L.CreateButton>Create account</L.CreateButton>
      </L.CreateContainer>
    </L.Container>
  );
};

export default LoginPage;
