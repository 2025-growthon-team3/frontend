import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import ApplyVolunteerList from "../../../components/MyPage/Personal/ApplyVolunteerList.jsx";
import * as A from "./ApplyVolunteerPage.styles.js";
import TabBar from "../../../components/TabBar/TabBar.jsx";
const ApplyVolunteerListPage = () => {

  return (
    <A.Container>
      <A.Background>
        <TitleBox color="orange">신청 현황</TitleBox>
        <A.ScrollableVolunteerList id="scrollableDiv">
          <ApplyVolunteerList />
        </A.ScrollableVolunteerList>
      </A.Background>
      <TabBar type="songil" index={2} />
    </A.Container>
  );
};

export default ApplyVolunteerListPage;
