import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import UnmatchedVolunteerList from "./components/Listpage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import ListPagePersonal from "./pages/ListPage/Personal/ListPagePersonal.jsx";
import ListPageInstitution from "./pages/ListPage/Institution/ListPageInstitution.jsx";
import TitleBox from "./components/TitleBox/TitleBox.jsx";
import VolunteerCardBase from "./components/Listpage/VolunteerCardBase/VolunteerCardBase.jsx";
import DoneVolunteerListPage from "./pages/MyPage/Personal/DoneVolunteerListPage.jsx";
import ApplyVolunteerListPage from "./pages/MyPage/Personal/ApplyVolunteerListPage.jsx";
import InstitutionMyPage from "./pages/MyPage/Institution/InstitutionMyPage.jsx";
import VolunteerMyPage from "./pages/MyPage/Personal/VolunteerMyPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <VolunteerMyPage />,
        }

        // ,{
        //   path: "login",
        //   element: <LoginPage />,
        // },
        // {
        //   path: "select",
        //   element: <TargetSelectPage />,
        // },
        // {
        //   path: "signup",
        //   element: <SignUpPage />,
        // },
        // {
        //   path: "application",
        //   element: <ApplicationPage />,
        // },
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
