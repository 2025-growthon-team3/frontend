import styled from "styled-components";
export const TagWrapper = styled.div`
  margin-left: auto; /* 오른쪽 끝으로 밀기 */
  display: flex;
  align-items: center;
`;

export const TagAbout = styled.div`
  width: 90px;
  height: 35px;
  border-radius: 30px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${({ status, theme }) => {
    switch (status) {
        case "requested":
            return "lightgray";
        case "rejected":
            return "#F44336";
        case "approved":
            return theme.colors.orange;
        default:
            return "#BDBDBD";
    }
}};
  display: flex;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
`;