import styled from "styled-components";

import VolunteerList from "../components/Listpage/VolunteerList.jsx";
import Alamy from "../components/Listpage/Alamy.jsx";
const ListPage = () => {
    return (
        <PageContainer>
            <TopSection>
                <div>봉사 온도 컴포넌트 </div>
            </TopSection>
            <BottomSection>
                <Alamy/>
                <VolunteerList />
            </BottomSection>
        </PageContainer>
    );
};

export default ListPage;


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopSection = styled.div`
    flex: 0 0 17%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
`;

const BottomSection = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color:  ${({ theme }) => theme.colors.lightorange};
  padding: 10px;
  padding-bottom: 100px;  //하단 여백 추가 
  scrollbar-width: none;    //스크롤 안보이게 하려고
`;
