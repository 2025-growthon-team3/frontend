import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import * as D from "./DoneVolunteerListPage.styles.js"
import DoneVolunteerList from "../../../components/MyPage/Personal/DoneVolunteerList.jsx";

const DoneVolunteerListPage = () => {
    return(
        <D.Container>
            <D.Background>
                <TitleBox color="orange">신청 현황</TitleBox>
                <D.ScrollableVolunteerList id="scrollableDiv">
                    <DoneVolunteerList/>
                </D.ScrollableVolunteerList>
            </D.Background>
        </D.Container>
    )
}

export default DoneVolunteerListPage;