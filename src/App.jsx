import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ListPage from "./pages/ListPage.jsx";
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element:<ListPage/>,
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
