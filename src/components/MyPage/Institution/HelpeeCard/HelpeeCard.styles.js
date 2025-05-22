import styled from "styled-components";

export const  ButtonWrapper = styled.div`
    margin-left: auto; /* 오른쪽 끝으로 밀기 */
    display: flex;
    align-items: center;
`

export const XButton=styled.button`
    width: 50px;
    height: 50px;
    background-color: #f44336;
    color: white;
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #d32f2f;
    }
`