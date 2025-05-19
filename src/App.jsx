import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element:<div>초기 세팅 완료</div>,
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
