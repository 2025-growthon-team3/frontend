import styled, { css, keyframes } from "styled-components";

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
    transform: translateY(-10px);
  }
`;

export const SlideDetailWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 16px;
  border-radius:0 0 16px 16px;
  width: 85%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Pretendard Variable';
  animation: ${({ $show }) => ($show ? expand : collapse)} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`;