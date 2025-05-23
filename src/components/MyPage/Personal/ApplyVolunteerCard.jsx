import React from "react";
import MyPageCardBase from "../MyPageCardBase/MyPageCardBase.jsx";
import * as D from "./DoneVolunteerCard/DoneVolunteerCard.styles.js";

const ApplyVolunteerCard = ({
                                name,
                                age,
                                gender,
                                helpDetail,
                                status
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
        <>
            <MyPageCardBase
                name={name}
                age={age}
                gender={gender}
                helpDetail={helpDetail}>
            <D.TagAbout status={status}>
                {getStatusText(status)}
            </D.TagAbout>
            </MyPageCardBase>

        </>
    );
};

export default ApplyVolunteerCard;
