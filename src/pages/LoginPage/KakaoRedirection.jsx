import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoRedirection;
