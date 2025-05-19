import styled from "styled-components";

const getBackgroundColors = (title) => {
  if (title === "손길") {
    return {
      top: "#FADDB1",
      bottom: "#F7E8D3",
    };
  }
  return {
    top: "#c0d7d5",
    bottom: "#ceefec",
  };
};

export const Container = styled.div`
  width: ${({ size }) => size || "189px"};
  height: ${({ size }) => size || "189px"};
  border-radius: 50%;

  background-color: #fff;
  box-shadow: ${({ title }) => {
    const colors = getBackgroundColors(title);
    return `0px -5px 9px 0px ${colors.top} inset, 0px 6px 9.9px 0px ${colors.bottom} inset`;
  }};
  filter: drop-shadow(0px 5px 6.5px #adadad);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Title = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-align: center;
`;

export const Content = styled.div`
  color: #979797;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 500;

  text-align: center;
`;
