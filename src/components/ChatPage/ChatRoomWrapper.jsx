import React from "react";
import ChatRoomPersonal from "./ChatRoomPersonal/ChatRoomPersonal.jsx";
import ChatRoomInstitution from "./ChatRoomInstitution/ChatRoomInstitution.jsx";

export default function ChatRoomWrapper() {
    const currentUser = localStorage.getItem("Kakaoid");
    return currentUser === "INSTITUTION_1"
        ? <ChatRoomInstitution />
        : <ChatRoomPersonal />;
}