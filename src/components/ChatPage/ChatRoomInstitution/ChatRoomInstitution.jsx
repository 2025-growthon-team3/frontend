import React, { useEffect, useState, useRef } from "react";
import * as S from "./ChatRoomInstitution.styles.js";
import { IoMdSend } from "react-icons/io";
import { useParams, useLocation } from "react-router-dom";
import { volunteers } from "/src/mock/volunteers";      // your mock
import { db } from "../../../../firebase.js";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    doc,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";
import { formatTime } from "../../../utils/formatTime.js";

const ChatRoomInstitution = () => {
    const { roomId } = useParams();
    const { state } = useLocation();
    const [helpeeInfo, setHelpeeInfo] = useState(state?.helpee || null);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    const currentUser = "한국사회복지회관"; // 기관 ID
    const helpeeId = roomId.split("_")[0];

    useEffect(() => {
        if (!helpeeInfo) {
            const found = volunteers.find(
                (v) => v.helpeeId.toString() === helpeeId
            );
            if (found) setHelpeeInfo(found);
        }
    }, [helpeeInfo, helpeeId]);

    // 읽음 처리 추가
    useEffect(() => {
        if (!roomId) return;
        updateDoc(doc(db, "rooms", roomId), { unreadCount: 0 }).catch(console.error);
    }, [roomId]);

    useEffect(() => {
        if (!roomId) return;
        const q = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("timestamp", "asc")
        );
        const unsub = onSnapshot(q, (snap) =>
            setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
        );
        return () => unsub();
    }, [roomId]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        try {
            await addDoc(
                collection(db, "rooms", roomId, "messages"),
                {
                    text: input,
                    sender: currentUser,
                    timestamp: serverTimestamp(),
                }
            );
            await updateDoc(doc(db, "rooms", roomId), {
                lastMessage: input,
                lastMessageTime: serverTimestamp(),
            });
            setInput("");
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        } catch (err) {
            console.error(err);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    // 헬피 성별 한글 매핑
    const toKoreanGender = (g) => (g === "male" ? "남성" : g === "female" ? "여성" : g);

    return (
        <S.ChatWrapper>
            <S.Header>
                <S.ProfileImage src="/songil.png" />
                <S.ProfileName>{"봉사자"}</S.ProfileName>

                {/* *exactly* the same grey box you had in Personal */}
                {helpeeInfo && (
                    <S.HelpeeInfoWrapper>
                        <S.HelpeeImage src="/profile.png" />
                        <S.HelpeeTextWrapper>
                            <S.HelpeeInfo># 온기 정보#</S.HelpeeInfo>
                            <S.HelpeeInfo>이름: {helpeeInfo.name}</S.HelpeeInfo>
                            <S.HelpeeInfo>
                                {toKoreanGender(helpeeInfo.gender)}/{helpeeInfo.age}세
                            </S.HelpeeInfo>
                            <S.HelpeeInfo>도움 내용: {helpeeInfo.helpRequest}</S.HelpeeInfo>
                        </S.HelpeeTextWrapper>
                    </S.HelpeeInfoWrapper>
                )}
            </S.Header>

            <S.MessageList ref={bottomRef}>
                {messages.map((msg) => {
                    const isMe = msg.sender === currentUser;
                    return (
                        <S.MessageBubble key={msg.id} isMe={isMe}>
                            <S.MessageText>{msg.text}</S.MessageText>
                            <S.MessageTime>{formatTime(msg.timestamp)}</S.MessageTime>
                        </S.MessageBubble>
                    );
                })}
            </S.MessageList>

            <S.InputWrapper>
                <S.ChatInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="답장을 입력하세요"
                />
                <S.SendButton onClick={sendMessage}>
                    <IoMdSend style={{color:"white", width:"25px", height:"25px"}} />

                </S.SendButton>
            </S.InputWrapper>
        </S.ChatWrapper>
    );
};

export default ChatRoomInstitution;
