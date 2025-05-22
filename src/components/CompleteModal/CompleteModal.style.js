import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  width: 346px;
  height: 683px;

  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: radial-gradient(
    107.32% 141.42% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: -5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset;
  backdrop-filter: blur(21px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  all: unset;

  width: 38px;
  height: 39px;

  border-radius: 9px;
  background: #fff;
  box-shadow: 0px 2px 3.5px 0px rgba(0, 0, 0, 0.39), -4px -4px 13px 0px #fff,
    6px 6px 36px 0px rgba(0, 0, 0, 0.06);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 22.5px;
  right: 30px;
`;

export const CloseIcon = styled.img`
  width: 22px;
  height: 23px;
`;

export const Logo = styled.img`
  width: 250px;
  height: 250px;

  position: absolute;
  top: 100px;
`;

export const MessageBox = styled.div`
  width: 320px;
  height: 86px;

  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: #fffdf9;
  box-shadow: 0px -4px 14px 0px #fff inset,
    0px 2px 6px 0px rgba(66, 83, 107, 0.22) inset,
    0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);

  position: absolute;
  top: 363px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-weight: 700;
`;
