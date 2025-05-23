import {
    MyContainer,
    VImg,
    VInfo,
    VName,
    VSubInfo,
    RightSlot
} from "./MyPageCardBase.styles.js";

const MyPageCardBase = ({ name, age, gender, helpDetail, bgColor = "#ffffff", children }) => {
    return (
        <MyContainer $bgColor={bgColor}>
            <VImg src="/profile.png" alt="프로필 이미지" />
            <VInfo>
                <VName>{name}</VName>
                <VSubInfo>{gender === "female" ? "여성" : "남성"} / {age}세</VSubInfo>
                <VSubInfo>{helpDetail}</VSubInfo>
            </VInfo>
            <RightSlot>
                {children}
            </RightSlot>
        </MyContainer>
    );
};

export default MyPageCardBase;
