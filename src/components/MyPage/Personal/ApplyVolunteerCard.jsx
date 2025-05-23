import MyPageCardBase from "../MyPageCardBase/MyPageCardBase.jsx";
const ApplyVolunteerCard = ({
                                    name,
                                    age,
                                    gender,
                                    helpRequest,
                                }) => {
    return (
        <>
            <MyPageCardBase
                name={name}
                age={age}
                gender={gender}
                helpRequest={helpRequest}
            />
        </>
    );
};

export default ApplyVolunteerCard;

