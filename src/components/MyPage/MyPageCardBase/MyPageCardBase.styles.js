import styled from "styled-components";

export const MyContainer = styled.div`
  width: 90%;
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  border-radius: 28px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 16px;
  font-family: 'Pretendard Variable';
  line-height: 1.2;
  cursor: default;
`;

export const VImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

export const VInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  flex-grow: 1;
`;

export const VName = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0 0 0;
`;

export const VSubInfo = styled.div`
  font-size: 12px;
  color: #444;
`;

export const RightSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;
