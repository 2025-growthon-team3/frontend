import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as M from "./MatchingListPage.styles.js";
import { useNavigate } from "react-router-dom";
import MatchingList from "../../../components/MyPage/Institution/MatchingList/MatchingList.jsx";

const MatchingListPage = () => {
    const navigate = useNavigate();

    return (
        <M.Container>
            <M.Background>
                <M.TopWrapper>
                    <M.CenteredTitle>
                        <TitleBox color="mint">온기</TitleBox>
                    </M.CenteredTitle>
                </M.TopWrapper>
                <M.ScrollableVolunteerList id="scrollableDiv">
                    <MatchingList />
                </M.ScrollableVolunteerList>
            </M.Background>
        </M.Container>
    );
};

export default MatchingListPage;