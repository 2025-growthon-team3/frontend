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

export const ScrollableVolunteerList = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 40px 0 100px 0;
  width: 85%;
  cursor: default;
  //스크롤바 숨김
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
