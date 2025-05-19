import React from "react";
import * as T from "./TargetSelectPage.style";

// component
import Divider from "../../components/LoginPage/Divider/Divider";
import TargetButton from "../../components/LoginPage/TargetButton/TargetButton";

const TargetSelectPage = () => {
  return (
    <T.Container>
      <T.TargetContainer>
        <TargetButton title="온기">도움을 구하는 기관</TargetButton>
        <TargetButton title="손길">도움을 주려고 하는 봉사자</TargetButton>
      </T.TargetContainer>
      <Divider>Select the target</Divider>
    </T.Container>
  );
};

export default TargetSelectPage;
