import styled from "styled-components";

export const VContainer = styled.div`
    width: 85%;
    margin: 16px auto;
    display: flex;
    align-items: flex-start;
    background-color: #ffffff;
    border-radius: 28px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    max-height: ${({ $expanded }) => ($expanded ? "300px" : "80px")};
    overflow: hidden;
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
    font-size: 16px;
`;

export const VName = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const VSubInfo = styled.div`
    font-size: 12px;
    color: #444;
`;

export const VTag = styled.div`
  font-size: 12px;
  color: #444;
`;

export const VDetail = styled.div`
  font-size: 13px;
  color: #222;
  margin-top: 6px;
  line-height: 1.4;
`;
