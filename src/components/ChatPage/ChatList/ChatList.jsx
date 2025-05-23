// src/components/ChatPage/ChatList/ChatList.jsx
import React, { useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { formatTime } from "../../../utils/formatTime";

const ChatList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const roomsRef = collection(db, "rooms");
        const q = query(
            roomsRef,
            orderBy("lastMessageTime", "desc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setRooms(snapshot.docs.map(doc => ({
                roomId: doc.id,
                ...doc.data()
            })));
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            {rooms.map(room => {
                // 참가자 배열에서 기관이 아닌 쪽을 상대방으로 간주
                const otherId = room.participants.find(id => id !== "INSTITUTION_1");
                return (
                    <ChatCard
                        key={room.roomId}
                        roomId={room.roomId}
                        name={room.volunteerName || otherId}
                        lastMessage={room.lastMessage}
                        lastMessageTime={formatTime(room.lastMessageTime)}
                        unreadCount={room.unreadCount || 0}
                    />
                );
            })}
        </>
    );
};

export default ChatList;
