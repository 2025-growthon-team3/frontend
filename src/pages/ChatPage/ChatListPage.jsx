import TitleBox from "../../components/TitleBox/TitleBox.jsx";
import * as A from "./ChatListPage.styles.js"
import { IoChatbubble } from "react-icons/io5";
import ChatList from "/src/components/ChatPage/ChatList/ChatList.jsx";
const ChatListPage = () => {

    return(
        <A.Container>
            <A.Background>
                <TitleBox color="mint"><IoChatbubble style={{color:"white", height:"30px", width:"30px"}} /></TitleBox>
                <A.ScrollableVolunteerList id="scrollableDiv">
                    <ChatList/>
                </A.ScrollableVolunteerList>
            </A.Background>
        </A.Container>
    )
}

export default ChatListPage;