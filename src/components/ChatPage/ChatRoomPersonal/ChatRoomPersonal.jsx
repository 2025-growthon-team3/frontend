// src/components/ChatPage/ChatRoomPersonal/ChatRoomPersonal.jsx
import React, { useEffect, useState, useRef } from "react";
import * as S from "./ChatRoomPersonal.styles.js";
import { IoMdSend } from "react-icons/io";
import { useParams, useLocation } from "react-router-dom";
import { db } from "../../../../firebase.js";
import {
    addDoc,
    collection,
    query,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";
import { formatTime } from "../../../utils/formatTime.js";

const ChatRoomPersonal = () => {
    const { roomId } = useParams();
    const { state } = useLocation();
    // UnmatchedVolunteerCard 에서 넘겨준 helpee 정보
    const helpee = state?.helpee;

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    const currentUser = localStorage.getItem("Kakaoid");
    const toKoreanGender = (g) => {
        if (g === "male") return "남성";
        if (g === "female") return "여성";
        return g; // 기타 값은 그대로
    };
    // 메시지 구독
    useEffect(() => {
        if (!roomId) return;
        const q = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("timestamp")
        );
        const unsub = onSnapshot(q, snap =>
            setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return () => unsub();
    }, [roomId]);

    // 메시지 전송
    const sendMessage = async () => {
        if (!input.trim()) return;
        try {
            await addDoc(
                collection(db, "rooms", roomId, "messages"),
                { text: input, sender: currentUser, timestamp: serverTimestamp() }
            );
            setInput("");
            await updateDoc(doc(db, "rooms", roomId), {
                lastMessage: input,
                lastMessageTime: serverTimestamp(),
            });
        } catch (err) {
            console.error(err);
        }
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <S.ChatWrapper>
            <S.Header>
                {/* 원래 프로필 이미지·이름은 그대로 */}
                <S.ProfileImage src="/inst.png" />
                <S.ProfileName>한국사회복지회관</S.ProfileName>

                {/* 회색 박스 안의 헬피 정보만 helpee 로부터 */}
                {helpee && (
                    <S.HelpeeInfoWrapper>
                        <S.HelpeeImage src="/profile.png" alt="봉사대상자 프로필" />
                        <S.HelpeeTextWrapper>
                            <S.HelpeeInfo>
                               # 온기 정보#
                            </S.HelpeeInfo>
                            <S.HelpeeInfo>
                                이름:{helpee.name}
                            </S.HelpeeInfo>
                            <S.HelpeeInfo>
                                {toKoreanGender(helpee.gender)}/{helpee.age}세
                            </S.HelpeeInfo>
                            <S.HelpeeInfo>
                                도움 내용: {helpee.helpRequest}
                            </S.HelpeeInfo>
                        </S.HelpeeTextWrapper>
                    </S.HelpeeInfoWrapper>
                )}
            </S.Header>

            <S.MessageList>
                {messages.map(msg => (
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
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder="메시지를 입력하세요"
                />
                <S.SendButton onClick={sendMessage}>
                    <IoMdSend style={{color:"white", width:"25px", height:"25px"}} />
                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoomPersonal;
