import UnmatchedVolunteerList from "../../../components/HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import * as I from "./InstitutionMyPage.styles.js";
import React from "react";
import TabBar from "../../../components/TabBar/TabBar.jsx";
import { useNavigate } from "react-router-dom";

const InstitutionMyPage = () => {
  const navigate = useNavigate();

  const onClickOngi = () => {
    navigate("/mypage/ongi/list");
  };

  const onClickMatching = () => {
    navigate("/mypage/ongi/matching");
  };

  return (
    <I.PageWrapper>
      <I.Background>
        <I.ProfileSection>
          <I.ProfileImage src="/img/val.jpg" />
          <I.UserName>한국사회복지회관</I.UserName>
        </I.ProfileSection>
        <I.MenuCard>
          <I.MenuButton onClick={onClickOngi}>온기</I.MenuButton>
          <I.MenuButton onClick={onClickMatching}>Matching</I.MenuButton>
        </I.MenuCard>
      </I.Background>
      <TabBar type="ongi" index={2} />
    </I.PageWrapper>
  );
};

export default InstitutionMyPage;
