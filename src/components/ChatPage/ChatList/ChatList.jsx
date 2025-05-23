import React from 'react';
import ChatCard from '../ChatCard/ChatCard.jsx';
import { mockChatList } from './mockChats';

const ChatList = () => {
    return (
        <>
            {mockChatList.map((chat) => (
                <ChatCard key={chat.roomId} {...chat} />
            ))}
        </>
    );
};

export default ChatList;