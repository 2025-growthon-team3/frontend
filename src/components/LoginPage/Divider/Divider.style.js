import styled from "styled-components";

export const Container = styled.div`
  width: 300px;

  position: relative;
  margin: 67px 0 23px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.6px;
  background-color: #a39797;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 0 5px;

  color: #757171;

  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;
`;
