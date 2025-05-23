import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const KakaoRedirection = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) return;

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        params: { code },
      })
      .then((res) => {
        console.log("로그인 성공", res.data);
        localStorage.setItem("kakaoId", res.data.data.user.kakaoId);
        navigate("/select");
      })
      .catch((err) => {
        console.error("로그인 실패", err);
      });
  }, []);

  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #ffcc00;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default KakaoRedirection;
