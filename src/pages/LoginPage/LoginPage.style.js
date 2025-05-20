import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
`;

export const Logo = styled.img`
  width: 250px;
  height: 250px;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  margin-bottom: 39px;
`;

export const ForgetPassword = styled.button`
  all: unset;

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;
`;

export const KakaoButton = styled.button`
  all: unset;

  width: 327px;
  height: 48px;

  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: #fae100;
  box-shadow: 0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  img {
    width: 46px;
    height: 46px;
  }
`;

export const CreateContainer = styled.div`
  color: #636363;

  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 400;

  display: flex;
  gap: 4px;
`;

export const CreateButton = styled.button`
  all: unset;

  color: #0c1f22;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-weight: 600;
`;
