import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import ChatRoom from "./components/ChatPage/ChatRoom/ChatRoom.jsx";
import ChatList from "./components/ChatPage/ChatList/ChatList.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <ChatRoom/>,
        },
        {
          path: "login",
          element: <LoginPage />,
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
