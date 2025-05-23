import React, { useState } from "react";
import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VButtonWrapper,
    VButton
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import theme from "../../../styles/theme.js";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase.js";
import CompleteModal from "../../../components/CompleteModal/CompleteModal.jsx";
import axiosInstance from "../../../api/axiosInstance.js";

const UnmatchedVolunteerCard = ({
                                    helpeeId,
                                    name,
                                    age,
                                    gender,
                                    helpRequest,
                                    helpDetail,
                                    isExpanded,
                                    onClick,
                                }) => {
    const navigate = useNavigate();
    const INSTITUTION_ID = "INSTITUTION_1";

    // 매칭 신청 모달 상태
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChat = async () => {
        const kakaoId = localStorage.getItem("Kakaoid");
        const roomId = `${helpeeId}_${kakaoId}`;
        const roomRef = doc(db, "rooms", roomId);

        await setDoc(
            roomRef,
            {
                participants: [helpeeId, kakaoId],
                receiverId: INSTITUTION_ID,
                createdAt: serverTimestamp(),
                volunteerName: name,
                unreadCount: 0,
            },
            { merge: true }
        );

        navigate(`/chatroom/personal/${roomId}`, {
            state: { helpee: { helpeeId, name, age, gender, helpRequest, helpDetail } }
        });
    };

    const handleMatch = async () => {
        try {
            // axiosInstance 에 이미 baseURL, auth 헤더 등 세팅되어 있다면
            const response = await axiosInstance.post(`/volunteer/${helpeeId}`);
            if (response.data.success) {
                setIsModalOpen(true);
            } else {
                alert("매칭 신청 실패: " + response.data.message);
            }
        } catch (err) {
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        alert("잘못된 요청입니다.");
                        break;
                    case 401:
                        alert("인증이 필요합니다.");
                        break;
                    case 404:
                        alert("헬피 또는 헬퍼 정보를 찾을 수 없습니다.");
                        break;
                    case 409:
                        alert("이미 매칭 신청이 되어 있습니다.");
                        break;
                    default:
                        alert("서버 오류가 발생했습니다.");
                }
            } else {
                console.error(err);
                alert("네트워크 오류가 발생했습니다.");
            }
        }
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
                    <VButton onClick={handleMatch}>매칭 신청</VButton>
                    <VButton onClick={handleChat}>문의</VButton>
                </VButtonWrapper>
            )}

            {isModalOpen && (
                <CompleteModal onClick={() => setIsModalOpen(false)}>
                    매칭 신청 완료
                </CompleteModal>
            )}
        </>
    );
};

export default UnmatchedVolunteerCard;
