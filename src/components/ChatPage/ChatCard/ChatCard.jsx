import React from "react";
import * as S from "./ChatCard.styles.js";
import { useNavigate } from "react-router-dom";

const ChatCard = ({
                      name,
                      lastMessage,
                      lastMessageTime,
                      unreadCount,
                      roomId,
                      mode = "institution",      // "institution" | "personal"
                      helpee,                    // optional, state.helpee
                  }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (mode === "institution") {
            navigate(`/chatroom/institution/${roomId}`, { state: { helpee } });
        } else {
            navigate(`/chatroom/personal/${roomId}`, { state: { helpee } });
        }
    };

    return (
        <S.Card onClick={handleClick}>
            <S.ProfileImg src="/profile.png" alt="프로필" />
            <S.TextSection>
                <S.Name>{name}</S.Name>
                <S.HelpRequest>{lastMessage}</S.HelpRequest>
            </S.TextSection>
            <S.RightInfo>
                <S.Time>{lastMessageTime}</S.Time>
                {unreadCount > 0 && <S.Badge>{unreadCount}</S.Badge>}
            </S.RightInfo>
        </S.Card>
    );
};

export default ChatCard;
