import MatchedVolunteerList from "../../../components/HomePage/MatchedVolunteerList/MatchedVolunteerList.jsx";
import PercentBar from "../../../components/PercentBar/PercentBar.jsx";
import TabBar from "../../../components/TabBar/TabBar.jsx";
import * as I from "./ListPageInstitution.styles.js";
import Alamy from "/src/components/HomePage/Alamy/Alamy.jsx";
import { useNavigate } from "react-router-dom";

const ListPageInstitution = () => {
    const navigate = useNavigate();
  return (
    <I.PageContainer>
        {/* 채팅 리스트로 이동하는 버튼 */}
        <I.ChatButton onClick={() => navigate("/chats")}>
        </I.ChatButton>
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
