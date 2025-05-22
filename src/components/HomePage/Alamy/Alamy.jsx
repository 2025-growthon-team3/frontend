import styled from "styled-components";
const Alamy = ({ label }) => {
    return (
        <AlamBox>
            {label}
        </AlamBox>
    );
};

export const AlamBox=styled.div`
    display: flex;
    padding: 10px;
    margin:16px;
    font-size:20px;
    font-weight: bold;
    font-family: 'Pretendard Variable';
    
`
export default Alamy