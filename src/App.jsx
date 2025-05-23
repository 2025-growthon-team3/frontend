import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import KakaoRedirection from "./pages/LoginPage/KakaoRedirection";
import MainPage from "./pages/MainPage/MainPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import MyPage from "./pages/MyPage/MyPage";
import ChatRoom from "./components/ChatPage/ChatRoom/ChatRoom.jsx";
import MatchingListPage from "./pages/MyPage/Institution/MatchingListPage.jsx";
import ListPagePersonal from "./pages/HomePage/Personal/ListPagePersonal.jsx";
import ChatListPage from "./pages/ChatPage/ChatListPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <MainPage />,
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
          element: <LocationPage />,
        },
        {
          path: "mypage",
          element: <MyPage />,
        },
        {
          path: '/apply',
          element: <ListPagePersonal />
        },
        {
          path: '/chatroom/:roomId',
          element: <ChatRoom />
        },
        {
          path: '/chat-list',
          element: <ChatListPage />
        },
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
