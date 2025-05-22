import * as M from './MatchingCard.styles.js';
import MyPageCardBase from "../../MyPageCardBase/MyPageCardBase.jsx";

const MatchingCard = ({
                          helpeeId,
                          name,
                          age,
                          gender,
                          helpRequest,
                          onDecision, // 상태 변경 함수 (상위 컴포넌트에서 받음)
                      }) => {
    return (
        <MyPageCardBase
            name={name}
            age={age}
            gender={gender}
            helpRequest={helpRequest}
        >
            <M.ButtonWrapper>
                <M.OButton onClick={() => onDecision(helpeeId, "approved")}>O</M.OButton>
                <M.XButton onClick={() => onDecision(helpeeId, "rejected")}>X</M.XButton>
            </M.ButtonWrapper>
        </MyPageCardBase>
    );
};

export default MatchingCard;
