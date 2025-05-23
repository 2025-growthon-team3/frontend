import React from 'react';
import * as S from './ChatCard.styles.js';
import { useNavigate } from 'react-router-dom';

const ChatCard = ({ name,lastMessage, lastMessageTime, unreadCount, roomId }) => {
    const navigate = useNavigate();

    return (
        <S.Card onClick={() => navigate(`/chatroom/${roomId}`)}>
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
