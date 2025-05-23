import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard Variable';
        src: url('/src/assets/fonts/PretendardVariable.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #eaeaea;  //루트 바깥쪽 배경색 살짝 구분해뒀습니다
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        width: ${({ theme }) => theme.sizes.width};
        height: ${({ theme }) => theme.sizes.height};
        position: relative;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        border-radius: 40px; //border-radius를 살짝 주는게 핸드폰 같긴 한데 나중에 필요없음 삭제해도 무관할듯 합니다 
        overflow: hidden; //스크롤 필요한 부분은 ScrollArea와 같은 컴포넌트로 감싸서 사용하는게 좋을 것 같습니다
    }
`;

export default GlobalStyle;
