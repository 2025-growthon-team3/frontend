import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
  padding: 90px 0 0 0;
`;

// export const TopSection = styled.div`
//     flex: 0 0 17%;
//     background-color: #ffffff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 18px;
//     font-weight: bold;
// `;

export const BottomSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightorange};
  height: calc(83vh - 70px);
  border-radius: 50px;
  padding: 20px 20px 100px 20px;
  margin-top: 35px;
`;

export const TopWrapper = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "pretendard-variable;
`;
export const AlamyWrapper = styled.div`
  height: 70px;
`;

export const ScrollableVolunteerList = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding-bottom: 70px;

  //스크롤바 숨김
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
