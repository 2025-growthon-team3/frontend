import styled from "styled-components";

export const VContainer = styled.div`
    width: 90%;
    margin: 16px auto;
    display: flex;
    align-items: flex-start;
    background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
    border-radius: 28px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    line-height: 1.2;
    font-family: 'Pretendard Variable';
    max-height: ${({ $expanded }) => ($expanded ? "400px" : "80px")};
`;

export const VImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 16px;
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
    font-size: 12px;
    color: #444;
`;


export const Vtitle=styled.div`
    font-size: 13px;
    color: #222;
    margin-top: 6px;
    line-height: 1.2;
    margin-right: 40px;
    font-weight: bold;
`
export const VDetail = styled.div`
  font-size: 13px;
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
  font-family: 'Pretendard Variable';
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
    width: 150px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;
