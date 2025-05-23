import * as H from './HelpeeCard.styles.js';
import MyPageCardBase from "../../MyPageCardBase/MyPageCardBase.jsx";

const HelpeeCard = ({
                        name,
                        age,
                        gender,
                        helpRequest,
                        onDelete, // 삭제 이벤트 받음
                    }) => {
    return (
        <MyPageCardBase
            name={name}
            age={age}
            gender={gender}
            helpRequest={helpRequest}
        >
            <H.ButtonWrapper>
                <H.XButton onClick={onDelete}>X</H.XButton>
            </H.ButtonWrapper>
        </MyPageCardBase>
    );
};

export default HelpeeCard;
