import UnmatchedVolunteerList from "../../../components/HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import Alamy from "../../../components/HomePage/Alamy/Alamy.jsx";
import * as L from "./ListPagePersonal.styles.js";
import PercentBar from "../../../components/PercentBar/PercentBar.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";

const ListPagePersonal = () => {
  return (
    <L.PageContainer>
      <PercentBar type="songil" percent={50} />
      <L.BottomSection>
        <L.AlamyWrapper>
          <Alamy label={"도움 알림이"} />
        </L.AlamyWrapper>
        <L.ScrollableVolunteerList id="scrollableDiv">
          <UnmatchedVolunteerList />
        </L.ScrollableVolunteerList>
      </L.BottomSection>
      <TabBar type="songil" index={1} />
    </L.PageContainer>
  );
};

export default ListPagePersonal;
