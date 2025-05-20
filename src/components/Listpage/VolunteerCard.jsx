import {
    VContainer,
    VImg,
    VInfo,
    VSubInfo,
    VTag,
    VName,
    VDetail,
} from "./VolunteerCard.styles.js";

const VolunteerCard = ({ name, profileImg, age, need, tag, gender, isExpanded, onClick }) => {
    return (
        <VContainer onClick={onClick} $expanded={isExpanded}>
            <VImg src={profileImg} />
            <VInfo>
                <VName>{name}</VName>
                <VSubInfo>{gender} / {age}세</VSubInfo>
                <VSubInfo>#{tag}</VSubInfo>
                {isExpanded && <VDetail>{need}</VDetail>}
            </VInfo>
        </VContainer>
    );
};

export default VolunteerCard;

