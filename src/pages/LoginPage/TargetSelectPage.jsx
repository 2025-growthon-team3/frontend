import React from "react";
import * as T from "./TargetSelectPage.style";

// component
import Divider from "../../components/LoginPage/Divider/Divider";
import TargetButton from "../../components/LoginPage/TargetButton/TargetButton";
import { useNavigate } from "react-router-dom";

const TargetSelectPage = () => {
  const nav = useNavigate();

  // 온기
  const onClickOngi = () => {
    nav("/signup");
  };

  // 손길
  const onClickSongil = () => {
    nav("/application");
  };

  return (
    <T.Container>
      <T.TargetContainer>
        <TargetButton title="온기" onClick={onClickOngi}>
          도움을 구하는 기관
        </TargetButton>
        <TargetButton title="손길" onClick={onClickSongil}>
          도움을 주려고 하는 봉사자
        </TargetButton>
      </T.TargetContainer>
      <Divider>Select the target</Divider>
    </T.Container>
  );
};

export default TargetSelectPage;
