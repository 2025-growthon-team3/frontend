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
    width: 140px;
    height: 140px;
    margin-top: 120px;
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

// 채팅 메시지 리스트
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
// 말풍선 조정
export const MessageBubble = styled.div.attrs((props) => ({
    isMe: props.isMe,
}))`
    align-self: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
    background-color: ${(props) =>
            props.isMe ? props.theme.colors.lightorange : props.theme.colors.lightmint};
    color: black;
    border-radius: 16px 16px ${(props) => (props.isMe ? '4px 16px' : '16px 4px')};
    padding: 12px 16px 20px; /* 하단 패딩 더 줌 */
    max-width: 75%;
    position: relative;
    word-break: break-word;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        ${(props) => (props.isMe ? 'right: -10px;' : 'left: -10px;')}
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-top-color: ${(props) =>
                props.isMe ? props.theme.colors.lightorange : props.theme.colors.lightmint};
        border-bottom: 0;
        margin-bottom: 2px;
    }
`;

// 말풍선 안 timestamp
export const MessageTime = styled.div`
  position: absolute;
  right: 14px;
  bottom: 4px;
  font-size: 10px;
  color: #888;
`;


// 말풍선 안 텍스트
export const MessageText = styled.div`
    white-space: pre-wrap;
    
`;

// 입력 영역 Wrapper
export const InputWrapper = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    padding: 12px;
    border-top: 1px solid #eee;
    background-color: white;
`;

// 채팅 입력창
export const ChatInput = styled.input`
    flex: 1;
    padding: 10px 16px;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    height: 40px;
`;

// 전송 버튼
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

    img {
        width: 20px;
        height: 20px;
    }
    
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
    margin-right: 40px;
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
    margin-left: 17px;
`;
