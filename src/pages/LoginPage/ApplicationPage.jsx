import React, { useState } from "react";
import axios from "axios";
import * as A from "./ApplicationPage.style";
import { useNavigate } from "react-router-dom";

// component
import TextField from "../../components/LoginPage/TextField/TextField";
import TitleBox from "../../components/TitleBox/TitleBox";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";
import CompleteModal from "../../components/CompleteModal/CompleteModal";

const ApplicationPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleSubmit = async () => {
    const kakaoId = localStorage.getItem("kakaoId");

    if (!kakaoId) {
      alert("카카오 로그인이 필요합니다.");
      return;
    }

    const payload = {
      name,
      residentNumber: number,
      address: location,
      kakaoId,
    };

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/signup/helper`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log("신청 완료", response.data.data.accessToken);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        setIsModalOpen(true);
      } else {
        alert("신청 실패: " + response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <A.Container>
      <A.Background>
        <TitleBox color="orange">심사 신청</TitleBox>
        <A.TextFieldContainer>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
          />
          <TextField
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="주민번호"
          />
          <TextField
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="위치"
          />
        </A.TextFieldContainer>
        <A.FileField>
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <A.FileFieldTitle>파일 업로드</A.FileFieldTitle>
            <A.FileFieldEx>Ex)주민등록증 / 재직증명서 등</A.FileFieldEx>
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setSelectedFile(e.target.files[0]);
              }
            }}
          />
          {selectedFile && (
            <A.FileFieldTitle>{selectedFile.name}</A.FileFieldTitle>
          )}
        </A.FileField>
        <LoginButton color="orange" onClick={handleSubmit}>
          신청
        </LoginButton>
        {isModalOpen && (
          <CompleteModal onClick={handleModalClose}>
            회원가입 완료
          </CompleteModal>
        )}
      </A.Background>
    </A.Container>
  );
};

export default ApplicationPage;
