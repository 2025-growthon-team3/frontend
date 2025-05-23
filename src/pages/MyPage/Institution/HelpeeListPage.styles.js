import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.mint};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0 0 0;
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightmint};
    border-radius: 50px 50px 0 0;
    display: flex;
    align-items: center;
`;
export const ScrollableVolunteerList = styled.div.attrs(() => ({
    id: "scrollableDiv",
}))`
    flex-grow: 1;
    min-height: 0; // ✅ flex + overflow-y 구성에서 중요함
    overflow-y: auto;
    width: 85%;
    padding: 30px 0 70px 0;
    cursor: default;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TopWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 0 30px 0;
`;

export const CenteredTitle = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const PlusButton = styled.button`
    position: relative;
    left: 320px; // 오른쪽 여백
    top: 0;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: white;
    border: none;
    color: ${({ theme }) => theme.colors.mint};
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;
