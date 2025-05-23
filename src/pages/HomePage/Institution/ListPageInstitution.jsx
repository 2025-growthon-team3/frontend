import MatchedVolunteerList from "../../../components/HomePage/MatchedVolunteerList/MatchedVolunteerList.jsx";
import PercentBar from "../../../components/PercentBar/PercentBar.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";
import * as I from "./ListPageInstitution.styles.js";
import Alamy from "/src/components/HomePage/Alamy/Alamy.jsx";

const ListPageInstitution = () => {
  return (
    <I.PageContainer>
      <PercentBar type="ongi" percent={50} />
      <I.BottomSection>
        <I.AlamyWrapper>
          <Alamy label={"봉사 진행 알림이"} />
        </I.AlamyWrapper>
        <I.ScrollableVolunteerList id="scrollableDiv">
          <MatchedVolunteerList />
        </I.ScrollableVolunteerList>
      </I.BottomSection>
      <TabBar type="ongi" index={1} />
    </I.PageContainer>
  );
};

export default ListPageInstitution;
