import React, { useEffect, useState } from "react";
import { db } from "/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const ChatList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "rooms"));
                const roomList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRooms(roomList);
            } catch (error) {
                console.error("채팅방 목록 불러오기 실패:", error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            <h2>채팅방 목록</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>
                        <img src={room.image} alt="썸네일" style={{ width: "40px" }} />
                        <div>
                            <strong>{room.name}</strong>
                            <p>{room.lastMessage}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
