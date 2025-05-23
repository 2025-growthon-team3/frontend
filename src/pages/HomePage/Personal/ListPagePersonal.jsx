import UnmatchedVolunteerList from "../../../components/HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import Alamy from "../../../components/HomePage/Alamy/Alamy.jsx";
import * as L from './ListPagePersonal.styles.js'

const ListPagePersonal = () => {
    return (
        <L.PageContainer>
                <L.TopWrapper>봉사 온도 컴포넌트 </L.TopWrapper>
            <L.BottomSection>
                <L.AlamyWrapper>
                    <Alamy label={"도움 알림이"} />
                </L.AlamyWrapper>
                <L.ScrollableVolunteerList id="scrollableDiv">
                    <UnmatchedVolunteerList />
                </L.ScrollableVolunteerList>
            </L.BottomSection>
        </L.PageContainer>
    );
};

export default ListPagePersonal;

