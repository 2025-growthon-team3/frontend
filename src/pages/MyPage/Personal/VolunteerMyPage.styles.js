import styled from "styled-components";

export const PageWrapper = styled.div`
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    display: flex;
    padding: 0 0 480px 0;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightorange78};
    border-radius: 0 0 50px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
    font-family: 'Pretendard Variable';
    font-weight: bold;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const UserName = styled.div`
  font-size: 18px;
`;

export const MenuCard = styled.div`
    margin-top: 40px;
    font-family: 'Pretendard Variable';
    justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding: 24px;
  width: 80%;
    flex-shrink: 0; // 높이 고정
    height: 250px;
    box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.2);
`;

export const MenuButton = styled.div`
  background-color: #ffe0b2;
  border-radius: 20px;
    height: 60px;
    padding: 18px;
    margin: 30px auto 0;
  text-align: center;
    justify-content: center;
    box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.2);
  font-size: 18px;
`;

