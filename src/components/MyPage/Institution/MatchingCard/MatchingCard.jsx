import * as M from './MatchingCard.styles.js';
import MyPageCardBase from "../../MyPageCardBase/MyPageCardBase.jsx";

const MatchingCard = ({ name, age, gender, experience, onApprove, onReject }) => {
    return (
        <MyPageCardBase
            name={name}
            age={age}
            gender={gender}
            helpRequest={`봉사 경험 ${experience}회`}
        >
            <M.ButtonWrapper>
                <M.ApproveButton onClick={onApprove}>O</M.ApproveButton>
                <M.RejectButton onClick={onReject}>X</M.RejectButton>
            </M.ButtonWrapper>
        </MyPageCardBase>
    );
};

export default MatchingCard;
