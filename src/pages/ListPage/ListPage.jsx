import VolunteerList from "../../components/Listpage/VolunteerList/VolunteerList.jsx";
import Alamy from "../../components/Listpage/Alamy/Alamy.jsx";
import * as L from './ListPage.styles.js'

const ListPage = () => {
    return (
        <L.PageContainer>
            <L.TopSection>
                <div>봉사 온도 컴포넌트 </div>
            </L.TopSection>
            <L.BottomSection>
                <L.AlamyWrapper>
                    <Alamy />
                </L.AlamyWrapper>
                <L.ScrollableVolunteerList id="scrollableDiv">
                    <VolunteerList />
                </L.ScrollableVolunteerList>
            </L.BottomSection>
        </L.PageContainer>
    );
};

export default ListPage;

