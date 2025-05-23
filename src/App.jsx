import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import KakaoRedirection from "./pages/LoginPage/KakaoRedirection";
import LocationPage from "./pages/LocationPage/LocationPage";
import ListPagePersonal from "./pages/HomePage/Personal/ListPagePersonal";
import ListPageInstitution from "./pages/HomePage/Institution/ListPageInstitution";
import VolunteerMyPage from "./pages/MyPage/Personal/VolunteerMyPage";
import InstitutionMyPage from "./pages/MyPage/Institution/InstitutionMyPage";
import DoneVolunteerListPage from "./pages/MyPage/Personal/DoneVolunteerListPage";
import ApplyVolunteerListPage from "./pages/MyPage/Personal/ApplyVolunteerListPage";
import HelpeeListPage from "./pages/MyPage/Institution/HelpeeListPage";
import HelpeeRegistrationPage from "./pages/MyPage/Institution/HelpeeRegistrationPage";
import MatchingListPage from "./pages/MyPage/Institution/MatchingListPage";
import ChatListPage from "./pages/ChatPage/ChatListPage";
import ChatRoomInstitution from "./components/ChatPage/ChatRoomInstitution/ChatRoomInstitution.jsx";
import ChatRoomPersonal from "./components/ChatPage/ChatRoomPersonal/ChatRoomPersonal.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "home",
          children: [
            {
              path: "songil",
              element: <ListPagePersonal />,
            },
            {
              path: "ongi",
              element: <ListPageInstitution />,
            },
          ],
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "auth/kakao/callback",
          element: <KakaoRedirection />,
        },
        {
          path: "select",
          element: <TargetSelectPage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "application",
          element: <ApplicationPage />,
        },
        {
          path: "location",
          children: [
            {
              path: "songil",
              element: <LocationPage />,
            },
            {
              path: "ongi",
              element: <ListPageInstitution />, // 기관 지도 임시
            },
          ],
        },
        {
          path: "mypage",
          children: [
            {
              path: "songil",
              children: [
                {
                  index: true,
                  element: <VolunteerMyPage />,
                },
                {
                  path: "done",
                  element: <DoneVolunteerListPage />,
                },
                {
                  path: "apply",
                  element: <ApplyVolunteerListPage />,
                },
              ],
            },
            {
              path: "ongi",
              children: [
                {
                  index: true,
                  element: <InstitutionMyPage />,
                },
                {
                  path: "list",
                  element: <HelpeeListPage />,
                },
                {
                  path: "register",
                  element: <HelpeeRegistrationPage />,
                },
                {
                  path: "matching",
                  element: <MatchingListPage />,
                },
              ],
            },
          ],
        },
        {
          path: "chats",
          element: <ChatListPage />
        },
        {
          path: "chatroom/:roomId",
          element: (
              // 예: localStorage 값 또는 role 상태에 따라 컴포넌트를 전환
              localStorage.getItem("Kakaoid") === "한국사회복지회관"
                  ? <ChatRoomInstitution />
                  : <ChatRoomPersonal />
          ) }
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
