import {
    VContainer,
    VImg,
    VInfo,
    VSubInfo,
    VName,
    VDetail,
    Vtitle,
    VButtonWrapper,
    VButton
} from "./VolunteerCard.styles.js";

const VolunteerCard = ({ name, profileImg, age, need, tag, gender, isExpanded, onClick }) => {
    return (
        <>
            <VContainer onClick={onClick} $expanded={isExpanded}>
                <VImg src={profileImg} />
                <VInfo>
                    <VName>{name}</VName>
                    <VSubInfo>{gender} / {age}세</VSubInfo>
                    <VSubInfo>#{tag}</VSubInfo>
                    {isExpanded &&
                    <Vtitle>{need}</Vtitle>}
                    {isExpanded &&
                        <VDetail>{need}</VDetail>}

                </VInfo>
            </VContainer>

            {isExpanded && (
                <VButtonWrapper>
                    <VButton>매칭 신청</VButton>
                    <VButton>문의</VButton>
                </VButtonWrapper>
            )}
        </>
    );
};

export default VolunteerCard;