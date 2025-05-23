import styled from "styled-components";
import theme from "../../../../styles/theme.js";
export const  ButtonWrapper = styled.div`
    margin-left: auto; /* 오른쪽 끝으로 밀기 */
    display: flex;
    align-items: center;
`

export const XButton=styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({theme})=>theme.colors.lightmint};
    color:${theme.colors.orange};
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius:18px;
    cursor: pointer;
   &:hover {
        background-color: lightgray;};
    }
`