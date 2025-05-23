import styled from "styled-components";
import theme from "../../../../styles/theme.js";
export const ButtonWrapper = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ApproveButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.lightmint};
    color: ${theme.colors.mint};
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    &:hover {
        background-color:lightgray;
    }
`;

export const RejectButton = styled.button`
    width: 40px;
    height: 40px;
    
    background-color: ${({ theme }) => theme.colors.lightmint};
    color: ${theme.colors.orange};
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    &:hover {
        background-color:lightgray;
    }
`;
