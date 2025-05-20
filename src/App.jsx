import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import LoginPage from "./pages/LoginPage/LoginPage";
import TargetSelectPage from "./pages/LoginPage/TargetSelectPage";
import SignUpPage from "./pages/LoginPage/SignUpPage";
import ApplicationPage from "./pages/LoginPage/ApplicationPage";
import UnmatchedVolunteerList from "./components/Listpage/UnmatchedVolunteerList/UnmatchedVolunteerList.jsx";
import ListPagePersonal from "./pages/ListPage/ListPagePersonal.jsx";
import ListPageInstitution from "./pages/ListPage/ListPageInstitution.jsx";
import TitleBox from "./components/TitleBox/TitleBox.jsx";
import VolunteerCardBase from "./components/Listpage/VolunteerCardBase/VolunteerCardBase.jsx";
import VolunteerMyPage from "./pages/MyPage/Volunteer/VolunteerMyPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <VolunteerMyPage/>,
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
