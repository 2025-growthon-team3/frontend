import React from "react";
import * as A from "./ApplicationPage.style";
import TextField from "../../components/LoginPage/TextField/TextField";
import TitleBox from "../../components/TitleBox/TitleBox";
import LoginButton from "../../components/LoginPage/LoginButton/LoginButton";

const ApplicationPage = () => {
  return (
    <A.Container>
      <A.Background>
        <TitleBox color="orange">심사 신청</TitleBox>
        <A.TextFieldContainer>
          <TextField>이름</TextField>
          <TextField>주민 번호</TextField>
          <TextField>위치</TextField>
        <A.FileField>
          <A.FileFieldTitle>파일 업로드</A.FileFieldTitle>
          <A.FileFieldEx>Ex)주민등록증 / 재직증명서 등</A.FileFieldEx>
        </A.FileField>
          </A.TextFieldContainer>
        <LoginButton color="orange">신청</LoginButton>
      </A.Background>
    </A.Container>
  );
};

export default ApplicationPage;
