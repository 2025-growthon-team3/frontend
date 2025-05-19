import styled from "styled-components";

export const Container = styled.div`
  width: 144px;
  height: 49px;
  border-radius: 33px;
  background: ${({ theme, color }) => theme.colors[color]};

  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 6.2px rgba(76, 76, 77, 0.4),
    0 -4px 8.8px rgba(255, 255, 255, 0.25);

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;
