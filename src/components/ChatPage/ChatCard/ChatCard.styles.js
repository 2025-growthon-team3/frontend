import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
    padding: 14px;
  width: 90%;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 12px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 14px;
    font-family: "Pretendard-Variable";
`;

export const HelpRequest = styled.div`
  font-size: 13px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    font-family: "Pretendard-Variable";
    
`;

export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
    font-family: "Pretendard-Variable";
    font-size: 8px;
    
`;

export const Time = styled.div`
  font-size: 11px;
  color: #999;
`;

export const Badge = styled.div`
  background-color: #f25c05;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
`;
