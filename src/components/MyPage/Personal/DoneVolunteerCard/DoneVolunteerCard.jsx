import * as D from './DoneVolunteerCard.styles.js'
import MyPageCardBase from "../../MyPageCardBase/MyPageCardBase.jsx";

const DoneVolunteerCard = ({ helpTime, helpee }) => {


    return (
        <MyPageCardBase
            name={helpee.name}
        >
            <D.TagWrapper>
                <D.TagAbout status="approved">
                    완료: {helpTime}
                </D.TagAbout>
            </D.TagWrapper>
        </MyPageCardBase>
    );
};

export default DoneVolunteerCard;

