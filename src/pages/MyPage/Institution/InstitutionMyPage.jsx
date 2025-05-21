import UnmatchedVolunteerList from "../../../components/Listpage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import * as I from "./InstitutionMyPage.styles.js"
import * as S from "../Personal/VolunteerMyPage.styles.js";
import React from "react";
const InstitutionMyPage=()=>{
    return (
        <I.PageWrapper>
            <I.Background>
                <I.ProfileSection>
                    <I.ProfileImage src="/img/val.jpg" />
                    <I.UserName>한국사회복지회관</I.UserName>
                </I.ProfileSection>
                <I.MenuCard>
                    <I.MenuButton>온기</I.MenuButton>
                    <I.MenuButton>Matching</I.MenuButton>
                </I.MenuCard>
            </I.Background>
        </I.PageWrapper>
    );
}

export default InstitutionMyPage