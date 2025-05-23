import TitleBox from "../../../components/TitleBox/TitleBox.jsx";
import ApplyVolunteerList from "../../../components/MyPage/Personal/ApplyVolunteerList.jsx";
import * as A from "./ApplyVolunteerPage.styles.js"
const ApplyVolunteerListPage = () => {
return(
    <A.Container>
        <A.Background>
            <TitleBox color="orange">봉사 내역</TitleBox>
            <A.ScrollableVolunteerList id="scrollableDiv">
                <ApplyVolunteerList/>
            </A.ScrollableVolunteerList>
        </A.Background>
    </A.Container>
)
}

export default ApplyVolunteerListPage;