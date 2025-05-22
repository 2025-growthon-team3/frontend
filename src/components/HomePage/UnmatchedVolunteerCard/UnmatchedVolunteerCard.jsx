import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VButtonWrapper,
    VButton
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";

const UnmatchedVolunteerCard = ({
                           name,
                           age,
                           gender,
                           helpRequest,
                           helpDetail,
                           isExpanded,
                           onClick
                       }) => {
    return (
        <>
            <VolunteerCardBase
                name={name}
                age={age}
                gender={gender}
                onClick={onClick}
                isExpanded={isExpanded}
            >
                {isExpanded && <Vtitle>{helpRequest}</Vtitle>}
                {isExpanded && <VDetail>{helpDetail}</VDetail>}
            </VolunteerCardBase>

            {isExpanded && (
                <VButtonWrapper>
                    <VButton>매칭 신청</VButton>
                    <VButton>문의</VButton>
                </VButtonWrapper>
            )}
        </>
    );
};

export default UnmatchedVolunteerCard;
