import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as H from "./HelpeeListPage.styles.js"
import HelpeeList from "../../../components/MyPage/Institution/HelpeeList/HelpeeList.jsx";
const ApplyVolunteerListPage = () => {
    return(
        <H.Container>
            <H.Background>
                <TitleBox color="mint">온기</TitleBox>
                <H.ScrollableVolunteerList id="scrollableDiv">
                    <HelpeeList/>
                </H.ScrollableVolunteerList>
            </H.Background>
        </H.Container>
    )
}

export default ApplyVolunteerListPage;