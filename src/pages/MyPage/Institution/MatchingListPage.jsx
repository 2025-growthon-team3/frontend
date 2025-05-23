// MatchingListPage.jsx
import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as M from "./MatchingListPage.styles.js";
import MatchingList from "../../../components/MyPage/Institution/MatchingList/MatchingList.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";

const MatchingListPage = () => {
  return (
    <M.Container>
      <M.Background>
        <M.TopWrapper>
          <M.CenteredTitle>
            <TitleBox color="mint">Matching</TitleBox>
          </M.CenteredTitle>
        </M.TopWrapper>
        <M.ScrollableVolunteerList id="scrollableDiv">
          <MatchingList />
        </M.ScrollableVolunteerList>
      </M.Background>
      <TabBar type="ongi" index={2} />
    </M.Container>
  );
};

export default MatchingListPage;
