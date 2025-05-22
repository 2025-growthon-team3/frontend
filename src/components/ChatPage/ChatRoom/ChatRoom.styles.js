// src/components/ChatRoom.styles.js
import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

export const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const ProfileName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const MessageList = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MessageBubble = styled.div`
  align-self: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  background-color: ${({ isMe, theme }) =>
    isMe ? theme.colors.lightorange : theme.colors.lightmint};
  color: black;
  border-radius: 12px;
  padding: 10px 14px;
  max-width: 75%;
  position: relative;
`;

export const MessageText = styled.div`
  white-space: pre-wrap;
`;

export const MessageTime = styled.div`
  font-size: 11px;
  color: #b0b0b0;
  margin-top: 4px;
  text-align: right;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-top: 1px solid #eee;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
`;

export const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;
