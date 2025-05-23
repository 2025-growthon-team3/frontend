import * as D from './DoneVolunteerCard.styles.js'
import MyPageCardBase from "../../MyPageCardBase/MyPageCardBase.jsx";

const DoneVolunteerCard = ({
                               name,
                               age,
                               gender,
                               helpRequest,
                               status,
                           }) => {
    const getStatusText = (status) => {
        switch (status) {
            case "requested":
                return "대기";
            case "rejected":
                return "반려";
            case "approved":
                return "승인";
            default:
                return "미정";
        }
    };

    return (
        <MyPageCardBase
            name={name}
            age={age}
            gender={gender}
            helpRequest={helpRequest}
        >
            <D.TagWrapper>
                <D.TagAbout status={status}>
                    {getStatusText(status)}
                </D.TagAbout>
            </D.TagWrapper>
        </MyPageCardBase>
    );
};

export default DoneVolunteerCard;

