import styled from "styled-components";
const Alamy=()=>{
    return(
        <AlamBox>
            도움 알림이
        </AlamBox>
    )
}
export const AlamBox=styled.div`
    display: flex;
    width:120px;
    padding: 10px;
    margin:16px;
    margin-bottom: 30px;
    background-color:${({ theme }) => theme.colors.orange};
    border-radius: 15px;
    font-size:12px;
    color: white;
    
`
export default Alamy