import UnmatchedVolunteerList from "../../../components/HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import Alamy from "../../../components/HomePage/Alamy/Alamy.jsx";
import * as L from "./ListPagePersonal.styles.js";
import PercentBar from "../../../components/PercentBar/PercentBar.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";
import { useNavigate } from "react-router-dom";

import chat from "../../../assets/images/chatIcon.png";

const ListPagePersonal = () => {
  const navigate = useNavigate();

  return (
    <L.PageContainer>
      <L.ChatButton onClick={() => navigate()}>
        <img src={chat} alt="채팅 아이콘" />
      </L.ChatButton>
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
