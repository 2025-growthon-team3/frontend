import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VButtonWrapper,
    VButton
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import theme from "../../../styles/theme.js";
import {useNavigate} from "react-router-dom";

const UnmatchedVolunteerCard = ({
                                    helpeeId,
                                    name,
                                    age,
                                    gender,
                                    helpRequest,
                                    helpDetail,
                                    isExpanded,
                                    onClick
                       }) => {
    // 채팅방 이동 구현
    const navigate = useNavigate();
    const kakaoId = localStorage.getItem('Kakaoid');

    const handleChat = () => {
        const roomId = `${helpeeId}_${kakaoId}`;
        navigate(`/chatroom/${roomId}`);
    };


    return (
        <>
            <VolunteerCardBase
                name={name}
                age={age}
                gender={gender}
                onClick={onClick}
                isExpanded={isExpanded}
                bgColor={isExpanded ? theme.colors.orange : "#ffffff"}
            >
                {isExpanded && <Vtitle>{helpRequest}</Vtitle>}
                {isExpanded && <VDetail>{helpDetail}</VDetail>}
            </VolunteerCardBase>

            {isExpanded && (
                <VButtonWrapper>
                    <VButton>매칭 신청</VButton>
                    <VButton onClick={handleChat}>문의</VButton>
                </VButtonWrapper>
            )}
        </>
    );
};

export default UnmatchedVolunteerCard;
