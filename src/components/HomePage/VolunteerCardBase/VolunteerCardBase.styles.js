import styled from "styled-components";

export const VContainer = styled.div`
  width: 320px;

  margin: 0 16px;
  display: flex;
  align-items: flex-start;

  border-radius: 33px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  box-shadow: 0px 2px 6px 0px rgba(66, 83, 107, 0.22) inset,
    0px -4px 8.8px 0px rgba(255, 255, 255, 0.25),
    0px 4px 6.2px -2px rgba(76, 76, 77, 0.4);

  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  line-height: 1.2;
  font-family: "Pretendard Variable";
  max-height: ${({ $expanded }) => ($expanded ? "300px" : "80px")};
  z-index: 1;

  margin-bottom: 15px;
`;

export const VImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 10px;
`;

export const VInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const VName = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 3px 0 0;
`;

export const VSubInfo = styled.div`
  font-size: 14px;
  color: #444;
`;

export const Vtitle = styled.div`
  font-size: 16px;
  color: #222;
  margin-top: 6px;
  line-height: 1.2;
  margin-right: 40px;
  font-weight: bold;
`;
export const VDetail = styled.div`
  font-size: 14px;
  color: #222;
  margin-top: 6px;
  line-height: 1.2;
  margin-right: 40px;
`;

export const VButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14px;
`;

export const VButton = styled.button`
  margin-bottom: 10px;
  font-family: "Pretendard Variable";
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 120px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;
// 오른쪽 상단 둥근 태그 (매칭된 헬퍼 이름 표시용)
export const VInfoBadge = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: #ffa622;
  box-shadow: 0px 2px 2px 0px #d8d8d8;

  width: 64px;
  height: 35.575px;

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-weight: 500;

  margin-top: 7px;
  border-radius: 20px;
  position: absolute;
  right: 20px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 확장 시 하단에 뜨는 오렌지색 카드
export const VOrangeCard = styled.div`
  width: 85%;
  margin: 16px auto;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  padding: 16px;
  border-radius: 16px;
  font-family: "Pretendard Variable";
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
