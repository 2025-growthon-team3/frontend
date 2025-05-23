import React, { useState } from "react";
import * as A from "./HelpeeRegistrationPage.styles.js";
import TextField from "../../../components/LoginPage/TextField/TextField";
import TitleBox from "../../../components/TitleBox/TitleBox";
import LoginButton from "../../../components/LoginPage/LoginButton/LoginButton";

const HelpeeRegistrationPage = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedInstitution, setSelectedInstitution] = useState(null);

    const institutions = ["기관A", "기관B", "기관C", "기관D"];

    return (
        <A.Container>
            <A.Background>
                <A.Header>
                    <TitleBox color="mint">온기 등록</TitleBox>
                </A.Header>

                <A.ScrollArea>
                    <A.ContentWrapper>
                        <A.TextFieldContainer>
                            <TextField>이름</TextField>
                            <TextField>나이</TextField>
                            <TextField>생년월일</TextField>

                            <A.ToggleRow>
                                {["남성", "여성"].map((gender) => (
                                    <A.ToggleButton
                                        key={gender}
                                        selected={selectedGender === gender}
                                        onClick={() => setSelectedGender(gender)}
                                    >
                                        {gender}
                                    </A.ToggleButton>
                                ))}
                            </A.ToggleRow>
                        </A.TextFieldContainer>

                        <A.InstitutionBox>
                            {institutions.map((inst) => (
                                <A.InstitutionOption
                                    key={inst}
                                    selected={selectedInstitution === inst}
                                    onClick={() => setSelectedInstitution(inst)}
                                >
                                    {inst}
                                </A.InstitutionOption>
                            ))}
                        </A.InstitutionBox>

                        <A.TextFieldContainer>
                            <TextField>도움 필요 내용 (ex. 청소지원)</TextField>
                            <TextField>세부사항 작성 (500자 이하)</TextField>
                        </A.TextFieldContainer>

                        <LoginButton color="mint">등록하기</LoginButton>
                        <div style={{ height: "100px" }} /> {/* 👈 여유 스크롤 */}
                    </A.ContentWrapper>
                </A.ScrollArea>
            </A.Background>
        </A.Container>
    );
};

export default HelpeeRegistrationPage;
