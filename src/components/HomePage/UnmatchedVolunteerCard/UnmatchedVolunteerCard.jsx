import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VButtonWrapper,
    VButton
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import theme from "../../../styles/theme.js";
import {useNavigate} from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase.js";

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
    const INSTITUTION_ID = "INSTITUTION_1"; // 기관 고정 채팅 ID
    const handleChat = async () => {
        const kakaoId = localStorage.getItem("Kakaoid");
        const roomId = `${helpeeId}_${kakaoId}`;
        const roomRef = doc(db, "rooms", roomId);
        // 방 생성 또는 participants만 머지(merge)
        await setDoc(
            roomRef,
            {
                participants: [helpeeId, kakaoId],
                receiverId: INSTITUTION_ID,       // 여기
                createdAt: serverTimestamp(),
            },
            { merge: true }
        );

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
