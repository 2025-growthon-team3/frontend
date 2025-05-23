import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import UnmatchedVolunteerList from "./components/HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import ListPagePersonal from "./pages/HomePage/Personal/ListPagePersonal.jsx";
import ListPageInstitution from "./pages/HomePage/Institution/ListPageInstitution.jsx";
import TitleBox from "./components/TitleBox/TitleBox.jsx";
import VolunteerCardBase from "./components/HomePage/VolunteerCardBase/VolunteerCardBase.jsx";
import DoneVolunteerListPage from "./pages/MyPage/Personal/DoneVolunteerListPage.jsx";
import ApplyVolunteerListPage from "./pages/MyPage/Personal/ApplyVolunteerListPage.jsx";
import InstitutionMyPage from "./pages/MyPage/Institution/InstitutionMyPage.jsx";
import VolunteerMyPage from "./pages/MyPage/Personal/VolunteerMyPage.jsx";
import HelpeeListPage from "./pages/MyPage/Institution/HelpeeListPage.jsx";
import MatchedVolunteerCard from "./components/HomePage/MatchedVolunteerCard/MatchedVolunteerCard.jsx";
import MatchedVolunteerList from "./components/HomePage/MatchedVolunteerList/MatchedVolunteerList.jsx";
import HelpeeRegistrationPage from "./pages/MyPage/Institution/HelpeeRegistrationPage.jsx";
import MatchingListPage from "./pages/MyPage/Institution/MatchingListPage.jsx";
import TestPage from "./pages/APItestPage.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <HelpeeListPage/>,
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
