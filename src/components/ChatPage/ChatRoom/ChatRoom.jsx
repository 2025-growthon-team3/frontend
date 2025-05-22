// src/components/ChatRoom.jsx

import React, { useState } from 'react';
import * as S from './ChatRoom.styles';
import { ReactComponent as SendIcon } from '../assets/send.svg'; // 비행기 아이콘 SVG

const ChatRoom = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "거동 불편 남성 봉사 신청합니다.\n구체적으로 얼마나 거동이 불편하실까요?", sender: "partner", time: "11:40" },
        { id: 2, text: "휠체어를 이용하시는 분입니다.", sender: "me", time: "11:40" }
    ]);
    const [input, setInput] = useState('');

    return (
        <S.ChatWrapper>
            <S.Header>
                <S.ProfileImage src="/profile.png" alt="상대 프로필" />
                <S.ProfileName>한국사회복지회관</S.ProfileName>
            </S.Header>

            <S.MessageList>
                {messages.map((msg) => (
                    <S.MessageBubble key={msg.id} isMe={msg.sender === 'me'}>
                        <S.MessageText>{msg.text}</S.MessageText>
                        <S.MessageTime>{msg.time}</S.MessageTime>
                    </S.MessageBubble>
                ))}
            </S.MessageList>

            <S.InputWrapper>
                <S.ChatInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메시지를 입력하세요"
                />
                <S.SendButton>
                    <SendIcon />
                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoom;
