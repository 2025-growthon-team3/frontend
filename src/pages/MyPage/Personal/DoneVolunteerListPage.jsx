import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as D from "./DoneVolunteerListPage.styles.js";
import DoneVolunteerList from "../../../components/MyPage/Personal/DoneVolunteerList.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";

const DoneVolunteerListPage = () => {
  return (
    <D.Container>
      <D.Background>
        <TitleBox color="orange">신청 현황</TitleBox>
        <D.ScrollableVolunteerList id="scrollableDiv">
          <DoneVolunteerList />
        </D.ScrollableVolunteerList>
      </D.Background>
      <TabBar type="songil" index={2} />
    </D.Container>
  );
};

export default DoneVolunteerListPage;
