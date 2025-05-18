import styled from "styled-components";

export const VContainer = styled.div`
    width: 250px;
    height: 70px;
    margin: 16px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 26px;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
`;

export const VImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
`;

export const VInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
`;