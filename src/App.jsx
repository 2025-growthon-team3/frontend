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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <ListPageInstitution/>,
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
