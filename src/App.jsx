import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import {useEffect} from "react";
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
import ChatRoomWrapper from "./components/ChatPage/ChatRoomWrapper.jsx";
function App() {
  useEffect(() => {
    localStorage.setItem(
        "accessToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGUiOiJoZWxwZXIiLCJpYXQiOjE3NDgwMjY5NzgsImV4cCI6MTc0ODYzMTc3OH0.sfEZBcRXPXfCmB6oBwEwNJ2Wrx6ZPigW0wkDm3VzDIY"
    );
  }, []);
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
        { path: "chatroom/:roomId", element: <ChatRoomWrapper /> },
      ],
    },
  ]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LoadScript>
  );
}

export default App;
