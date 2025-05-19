import styled from "styled-components";

export const Container = styled.div`
  width: 327px;
  height: 48px;

  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: #fffdf9;
  box-shadow: 0px -4px 14px 0px #fff inset,
    0px 2px 6px 0px rgba(66, 83, 107, 0.22) inset,
    0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);

  color: #6d6a6a;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-weight: 500;

  display: flex;
  align-items: center;
  padding: 0 18px;
`;

export const TextField = styled.input`
  all: unset;
  color: #000;
`;
