import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.mint};
    display: flex;
    flex-direction: column;
    padding: 50px 0 0 0;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightmint};
  border-radius: 50px 50px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
    flex-shrink: 0;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
`;

export const ScrollArea = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.lightmint};
    scrollbar-width: none;
    margin-bottom: 100px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
`;

export const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 64px;
    padding-bottom: 40px;
`;

export const ToggleRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 47px;
    margin-top: 20px;
`;

export const ToggleButton = styled.button`
    padding: 10px 20px;
    border-radius: 33px;
    width: 140px;
    background-color: ${({ selected, theme }) =>
            selected ? theme.colors.mint : "#ffffff"};
    color: ${({ selected }) => (selected ? "#ffffff" : "#333")};
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease;
    box-shadow: 0px -4px 14px 0px #fff inset,
    0px 2px 6px 0px rgba(66, 83, 107, 0.22) inset,
    0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);
   
`;

export const InstitutionBox = styled.div`
    width: 327px;
    height: 300px;
    background-color: white;
    border-radius: 33px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
`;

export const InstitutionOption = styled.div`
  width: 80%;
  text-align: center;
  padding: 10px;
  border-radius: 33px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.mint : "#f5f5f5"};
  color: ${({ selected }) => (selected ? "#ffffff" : "#333")};
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
`;
