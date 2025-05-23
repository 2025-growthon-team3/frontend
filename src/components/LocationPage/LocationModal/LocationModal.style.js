import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 349px;
  height: 538px;

  border-radius: 51px;
  background: #fff8ed;
  box-shadow: 0px -3px 9.9px 0px rgba(24, 23, 23, 0.43);

  animation: ${({ $isClosing }) => ($isClosing ? slideDown : slideUp)} 0.3s
    ease-out forwards;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-weight: 500;
  padding: 24px 0 10px 41px;
  margin: 0;
`;

export const CloseButton = styled.button`
  all: unset;

  width: 25px;
  height: 25px;

  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 2px 3.5px 0px rgba(0, 0, 0, 0.39), -4px -4px 13px 0px #fff,
    6px 6px 36px 0px rgba(0, 0, 0, 0.06);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 20px;
  right: 35px;
`;

export const CloseIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const ScrollableVolunteerList = styled.div`
  overflow-y: scroll;
  padding-bottom: 100px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
