import MatchedVolunteerList from "../../../components/Listpage/MatchedVolunteerList/MatchedVolunteerList.jsx";
import * as I from './ListPageInstitution.styles.js'
import Alamy from "/src/components/Listpage/Alamy/Alamy.jsx"

const ListPageInstitution = () => {
    return (
        <I.PageContainer>
            <I.TopSection>
                <div>기관 매칭률 </div>
            </I.TopSection>
            <I.BottomSection>
                <I.AlamyWrapper>
                    <Alamy label={"봉사 진행 알림이"} />
                </I.AlamyWrapper>
                <I.ScrollableVolunteerList id="scrollableDiv">
                    <MatchedVolunteerList />
                </I.ScrollableVolunteerList>
            </I.BottomSection>
        </I.PageContainer>
    );
};

export default ListPageInstitution;

