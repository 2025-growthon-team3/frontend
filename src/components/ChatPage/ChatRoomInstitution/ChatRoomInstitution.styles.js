import styled from "styled-components";
import theme from "../../../styles/theme.js";

// 채팅 전체 Wrapper
export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: white;
    overflow: hidden;
`;

// Header 수정: 중앙 정렬
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding: 10px;
`;

// 프로필 이미지
export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 140px;
    border-radius: 50%;
    border: none;

`;

// 프로필 이름
export const ProfileName = styled.div`
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Pretendard Variable";

`;
export const HelpeeInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    margin-top: 18px;
    width: 90%;
    background-color: #e1dfdf;
    padding: 14px;
    border-radius: 30px;
`;

export const HelpeeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-right: 60px;
`;

export const HelpeeInfo = styled.div`
    font-family: "Pretendard Variable";
    font-weight: 600;
    font-size: 14px;
`;

export const HelpeeImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 30px;
`;


export const MessageList = styled.div`
    margin-top: 120px;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
    padding: 12px;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: "Pretendard Variable";

`;
// 말풍선 (mint ↔ orange 반전)
export const MessageBubble = styled.div.attrs(props => ({
    isMe: props.isMe
}))`
  align-self: ${({ isMe }) => (isMe ? "flex-end" : "flex-start")};
  background-color: ${({ isMe, theme }) =>
    isMe ? theme.colors.lightmint : theme.colors.lightorange};
  color: black;
  padding: 12px 16px;
  border-radius: 16px 16px ${({ isMe }) => (isMe ? "4px 16px" : "16px 4px")};
  max-width: 75%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    ${({ isMe }) => (isMe ? "right: -10px;" : "left: -10px;")}
    border: 12px solid transparent;
    border-top-color: ${({ isMe, theme }) =>
    isMe ? theme.colors.lightmint : theme.colors.lightorange};
    border-bottom: 0;
    margin-bottom: 2px;
  }
`;

export const MessageText = styled.div`
    white-space: pre-wrap;
`;

export const MessageTime = styled.div`
  font-size: 10px;
  color: #888;
  margin-top: 4px;
  text-align: right;
`;

// 입력창
export const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
`;

export const SendButton = styled.button`
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
    border-radius: 30px;
    background-color: ${theme.colors.lightmint};
    color: red;

    &:hover {
        color: #000;
    }
`