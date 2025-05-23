// MatchingListPage.jsx
import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as M from "./MatchingListPage.styles.js";
import MatchingList from "../../../components/MyPage/Institution/MatchingList/MatchingList.jsx";
import { useNavigate } from "react-router-dom";

const MatchingListPage = () => {
    const navigate = useNavigate();

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
        </M.Container>
    );
};

export default MatchingListPage;
