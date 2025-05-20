import React from "react";
import * as S from "./VolunteerMyPage.styles";

const VolunteerMyPage = () => {
    return (
        <S.PageWrapper>
            <S.ProfileSection>
                <S.ProfileImage src="https://via.placeholder.com/100" alt="프로필" />
                <S.UserName>이지연</S.UserName>
            </S.ProfileSection>
            <S.MenuCard>
                <S.MenuButton>봉사 내역</S.MenuButton>
                <S.MenuButton>신청 현황</S.MenuButton>
            </S.MenuCard>
        </S.PageWrapper>
    );
};

export default VolunteerMyPage;
