import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
`;

export const Title = styled.p`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-weight: 500;

  margin: 0;
  padding: 0;

  width: 340px;
  padding: 0 15px;
`;

export const PercentContainer = styled.div`
  width: 340px;
  height: 36px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: #fbfbfa;
  box-shadow: 0px -4px 3.3px 0px #f3f3f3 inset,
    0px -4px 5.3px 0px rgba(66, 83, 107, 0.22) inset,
    0px 4px 5.8px -1px rgba(255, 244, 244, 0.25),
    0px 4px 3.8px 0px rgba(174, 172, 170, 0.73);

  display: flex;
  align-items: center;
  padding: 9.5px;

  position: relative;
`;

export const PercentBar = styled.div`
  width: ${({ percent }) => percent}%;
  height: 23px;

  border-radius: 20px;
  border: 1px solid #fff;
  background: ${({ type }) =>
    type === "songil"
      ? "linear-gradient(90deg, #f97e55 -3.92%, #ffd7ca 97.7%)"
      : "linear-gradient(90deg, #54cabc -3.92%, #bfeae5 97.7%)"};

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;

  display: flex;
  align-items: center;
  padding: 10.5px;
`;

export const MaxPercent = styled.p`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;

  position: absolute;
  right: 14px;
`;
