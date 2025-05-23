import styled, { keyframes } from "styled-components";

const expand = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const collapse = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(0px);
  }
`;

export const SlideDetailWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 40px 25px 30px 25px;
  border-radius: 0 0 16px 16px;
  width: 88%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  font-family: "Pretendard Variable";
  animation: ${({ $show }) => ($show ? expand : collapse)} 0.7s ease-in-out;
  animation-fill-mode: forwards;

  position: relative;
  top: -25px;
`;
export const ConnectedCardWrapper = styled.div`
  position: relative;
  margin: 24px 0;
  padding-left: 12px;
  border-left: 4px solid ${({ theme }) => theme.colors.mint}; // 좌측 연결선
`;
