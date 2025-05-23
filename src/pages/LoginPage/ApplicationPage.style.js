import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.orange};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightorange78};
  border-radius: 50px 50px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 84px;
`;

export const FileField = styled.div`
  width: 327px;
  height: 103px;

  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: #fffdf9;
  box-shadow: 0px -4px 14px 0px #fff inset,
    0px 2px 6px 0px rgba(66, 83, 107, 0.22) inset,
    0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);

  padding: 15px 18px;
  margin: 50px 0 79px 0;

  color: #6d6a6a;
  font-family: "Pretendard Variable";
  font-weight: 500;
  line-height: 150%;

  p {
    margin: 0;
  }
`;

export const FileFieldTitle = styled.p`
  font-size: 15px;
`;

export const FileFieldEx = styled.p`
  font-size: 12px;
`;
