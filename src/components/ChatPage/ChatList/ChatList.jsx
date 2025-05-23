import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatCard from "../ChatCard/ChatCard";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { formatTime } from "../../../utils/formatTime";
import { volunteers } from "/src/mock/volunteers";

const ChatList = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const roomsRef = collection(db, "rooms");
    const q = query(roomsRef, orderBy("lastMessageTime", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          roomId: doc.id,
          ...doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {rooms.map((room) => {
        // 방 ID: "helpeeId_helperId"
        const helpeeId = room.participants.find((id) => id !== "INSTITUTION_1");
        // mock 에서 헬피 정보 찾기 (나중에 API 로 교체)
        const helpee = volunteers.find(
          (v) => v.helpeeId.toString() === helpeeId
        );
        const displayName = room.volunteerName || helpee?.name || helpeeId;

        return (
          <ChatCard
            key={room.roomId}
            mode="institution"
            roomId={room.roomId}
            name={displayName}
            lastMessage={room.lastMessage}
            lastMessageTime={formatTime(room.lastMessageTime)}
            unreadCount={room.unreadCount || 0}
            helpee={
              helpee && {
                helpeeId,
                name: helpee.name,
                age: helpee.age,
                gender: helpee.gender,
                helpRequest: helpee.helpRequest,
                helpDetail: helpee.helpDetail,
              }
            }
          />
        );
      })}
    </>
  );
};

export default ChatList;
