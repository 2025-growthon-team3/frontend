import styled from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 90px;
  border-radius: 38px 38px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  position: absolute;
  bottom: 0;

  background: #fff;
  box-shadow: 0px -5px 7.6px -2px rgba(0, 0, 0, 0.15),
    6px 6px 36px 0px rgba(0, 0, 0, 0.06);
  z-index: 999;
`;

export const TabItem = styled.button`
  all: unset;

  width: 65px;
  height: 65px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
