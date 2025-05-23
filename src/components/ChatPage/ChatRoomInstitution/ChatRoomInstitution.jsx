import React, { useEffect, useState, useRef } from "react";
import * as S from "./ChatRoomInstitution.styles.js";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { volunteers } from "/src/mock/volunteers";
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

const ChatRoomInstitution = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [helpeeInfo, setHelpeeInfo] = useState(null);
    const bottomRef = useRef(null);

    // 기관 모드로 전환되어 있다고 가정
    const currentUser = "한국사회복지회관";
    const [helpeeId] = roomId.split("_");

    useEffect(() => {
        if (!roomId) return;
        const q = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("timestamp")
        );
        const un = onSnapshot(q, (snap) =>
            setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return () => un();
    }, [roomId]);

    useEffect(() => {
        const found = volunteers.find(v => v.helpeeId.toString() === helpeeId);
        if (found) setHelpeeInfo(found);
    }, [helpeeId]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        try {
            await addDoc(
                collection(db, "rooms", roomId, "messages"),
                { text: input, sender: currentUser, timestamp: serverTimestamp() }
            );
            setInput("");
            const roomRef = doc(db, "rooms", roomId);
            await updateDoc(roomRef, {
                lastMessage: input,
                lastMessageTime: serverTimestamp(),
            });
        } catch (err) {
            console.error("메시지 전송 에러:", err);
        }
    };

    return (
        <S.ChatWrapper>
            {/* Header: 오직 봉사자(helpee) 정보만 보여줌 */}
            <S.Header>
                <S.ProfileImage src="/profile.png" />
                <S.ProfileName>
                    {helpeeInfo?.name || "봉사자"}
                </S.ProfileName>
            </S.Header>

            {/* 메시지 리스트: isMe 반전 */}
            <S.MessageList ref={bottomRef}>
                {messages.map(msg => (
                    <S.MessageBubble
                        key={msg.id}
                        // 기관 메시지(내 메시지)는 mint, 봉사자 메시지는 orange
                        isMe={msg.sender !== currentUser}
                    >
                        <S.MessageText>{msg.text}</S.MessageText>
                        <S.MessageTime>{formatTime(msg.timestamp)}</S.MessageTime>
                    </S.MessageBubble>
                ))}
            </S.MessageList>

            {/* 입력창 */}
            <S.InputWrapper>
                <S.ChatInput
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder="답장을 입력하세요"
                />
                <S.SendButton onClick={sendMessage}>
                    <IoMdSend />
                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoomInstitution;
