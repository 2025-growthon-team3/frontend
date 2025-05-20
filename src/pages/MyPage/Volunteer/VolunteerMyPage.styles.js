// VolunteerMyPage.styles.js
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #ffe0b2 50%, #ff9800 50%);
  height: 100vh;
  position: relative;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const MenuCard = styled.div`
  margin-top: 32px;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MenuButton = styled.div`
  background-color: #ffe0b2;
  border-radius: 12px;
  padding: 14px;
  margin: 12px 0;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const FloatingBadge = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #f06292;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  padding: 6px 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
