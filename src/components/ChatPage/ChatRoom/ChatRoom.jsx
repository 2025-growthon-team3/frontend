import React, { useState, useRef, useEffect } from 'react';
import * as S from './ChatRoom.styles';
import { IoSend } from "react-icons/io5";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../../firebase.js';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const currentUser = 'me'; // 나중에 Firebase Auth로 대체 가능
    const bottomRef = useRef(null);


    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, []);

    // 🔽 새로운 메시지 생기면 스크롤 맨 아래로
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // ➕ 메시지 Firestore에 전송
    const sendMessage = async () => {
        console.log('메시지 전송 시도:', input); // 콘솔에 찍히는지 확인
        if (input.trim() === '') return;

        await addDoc(collection(db, 'messages'), {
            text: input,
            sender: currentUser,
            timestamp: serverTimestamp(),
        });

        setInput('');
    };

    // timestamp 받아오기
    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate(); // Firebase timestamp → Date
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

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
                        <S.MessageTime>{formatTime(msg.timestamp)}</S.MessageTime>
                    </S.MessageBubble>
                ))}

                <div ref={bottomRef} /> {/* ⬅️ 여기서 스크롤 이동 */}
            </S.MessageList>

            <S.InputWrapper>
                <S.ChatInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메시지를 입력하세요"
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <S.SendButton onClick={sendMessage}>
                    <IoSend />
                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoom;