import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as H from "./HelpeeListPage.styles.js";
import HelpeeList from "../../../components/MyPage/Institution/HelpeeList/HelpeeList.jsx";
import { useNavigate } from "react-router-dom";

const HelpeeListPage = () => {
    const navigate = useNavigate();

    return (
        <H.Container>
            <H.Background>
                <H.TopWrapper>
                    <H.CenteredTitle>
                        <TitleBox color="mint">온기</TitleBox>
                    </H.CenteredTitle>
                    <H.PlusButton onClick={() => navigate("/helpee-registration")}>
                        +
                    </H.PlusButton>
                </H.TopWrapper>
                <H.ScrollableVolunteerList id="scrollableDiv">
                    <HelpeeList />
                </H.ScrollableVolunteerList>
            </H.Background>
        </H.Container>
    );
};

export default HelpeeListPage;