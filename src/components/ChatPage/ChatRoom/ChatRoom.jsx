import React, { useEffect, useState, useRef } from 'react';
import * as S from './ChatRoom.styles';
import { IoMdSend } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { volunteers } from '/src/mock/volunteers'; // mock 데이터
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase.js';

const ChatRoom = () => {
    const { roomId } = useParams(); // e.g., 1_123456789
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [helpeeInfo, setHelpeeInfo] = useState(null);
    const bottomRef = useRef(null);

    const kakaoId = localStorage.getItem('Kakaoid');
    const currentUser = kakaoId;
    const [helpeeId] = roomId.split('_');

    // ✅ 메시지 불러오기
    useEffect(() => {
        const q = query(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubscribe();
    }, [roomId]);

    // ✅ 헬피 정보 설정
    useEffect(() => {
        const found = volunteers.find(v => v.helpeeId.toString() === helpeeId);
        if (found) setHelpeeInfo(found);
    }, [helpeeId]);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        await addDoc(collection(db, 'rooms', roomId, 'messages'), {
            text: input,
            sender: currentUser,
            timestamp: serverTimestamp(),
        });
        setInput('');
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate();
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };

    return (
        <S.ChatWrapper>
            <S.Header>
                <S.ProfileImage src="/inst.png" />
                <S.ProfileName>
                    {currentUser === '한국사회복지회관' ? helpeeInfo?.name || "봉사자" : "한국사회복지회관"}
                </S.ProfileName>
                <S.HelpeeInfoWrapper>
                    <S.HelpeeImage src="/profile.png" alt="봉사대상자 프로필" />
                    <S.HelpeeTextWrapper>
                    {helpeeInfo && (
                        <>
                            <S.HelpeeInfo>온기 정보: {helpeeInfo.name}/{helpeeInfo.gender}/{helpeeInfo.age}세</S.HelpeeInfo>
                            <S.HelpeeInfo></S.HelpeeInfo>
                            <S.HelpeeInfo>도움 내용: {helpeeInfo.helpRequest}</S.HelpeeInfo>
                        </>
                    )}
                    </S.HelpeeTextWrapper>
                </S.HelpeeInfoWrapper>
            </S.Header>



            <S.MessageList>
                {messages.map((msg) => (
                    <S.MessageBubble key={msg.id} isMe={msg.sender === currentUser}>
                        <S.MessageText>{msg.text}</S.MessageText>
                        <S.MessageTime>{formatTime(msg.timestamp)}</S.MessageTime>
                    </S.MessageBubble>
                ))}
                <div ref={bottomRef} />
            </S.MessageList>

            <S.InputWrapper>
                <S.ChatInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="메시지를 입력하세요"
                />
                <S.SendButton onClick={sendMessage}>
                    <IoMdSend style={{color:'white', width:'20px', height:'200px'}} />
                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoom;
