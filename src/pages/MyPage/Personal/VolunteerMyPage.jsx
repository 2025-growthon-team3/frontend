import React from "react";
import * as S from "./VolunteerMyPage.styles";
import TabBar from "../../../components/TabBar/TabBar";
import { useNavigate } from "react-router-dom";

const VolunteerMyPage = () => {
  const navigate = useNavigate();

  const onClickVolunteerHistory = () => {
    navigate("/mypage/songil/done");
  };

  const onClickApplyHistory = () => {
    navigate("/mypage/songil/apply");
  };

  return (
    <S.PageWrapper>
      <S.Background>
        <S.ProfileSection>
          <S.ProfileImage src="/img/val.jpg" />
          <S.UserName>김미주</S.UserName> {/* 시연 위해 임시 수정 */}
        </S.ProfileSection>
        <S.MenuCard>
          <S.MenuButton onClick={onClickVolunteerHistory}>
            봉사 내역
          </S.MenuButton>
          <S.MenuButton onClick={onClickApplyHistory}>신청 현황</S.MenuButton>
        </S.MenuCard>
      </S.Background>
      <TabBar type="songil" index={2} />
    </S.PageWrapper>
  );
};

export default VolunteerMyPage;
