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

export const ScrollableVolunteerList = styled.div`
    flex: 1;
    padding: 60px 0 70px 0;
    height: calc(100vh - 150px); // 정확히 계산
    overflow-y: scroll;
    width: 85%;
    cursor: default;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TopWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 50px 0 0 0;
`;

export const CenteredTitle = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;