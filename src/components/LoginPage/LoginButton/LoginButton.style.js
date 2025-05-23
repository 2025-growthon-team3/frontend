import styled from "styled-components";

export const Container = styled.div`
  width: 327px;
  height: 48px;

  border-radius: 33px;
  background: ${({ theme, color }) => theme.colors[color]};
  box-shadow: 0px 4px 8.1px -2px rgba(110, 109, 108, 0.86);

  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;

  cursor: pointer;
`;
