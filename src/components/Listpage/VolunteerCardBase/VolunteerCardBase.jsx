import {
    VContainer,
    VImg,
    VInfo,
    VName,
    VSubInfo
} from "./VolunteerCardBase.styles.js";

const VolunteerCardBase = ({ name, age, gender, helpRequest, onClick, isExpanded, bgColor = "#ffffff", children }) => {
    return (
        <VContainer onClick={onClick} $expanded={isExpanded} $bgColor={bgColor}>
            <VImg src="/img/val.jpg" />
            <VInfo>
                <VName>{name}</VName>
                <VSubInfo>{gender === "female" ? "여성" : "남성"} / {age}세</VSubInfo>
                <VSubInfo>{helpRequest}</VSubInfo>
                {children}
            </VInfo>
        </VContainer>
    );
};


export default VolunteerCardBase;
