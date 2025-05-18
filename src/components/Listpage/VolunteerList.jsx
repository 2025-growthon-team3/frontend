import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import volunteersData from "../../mock/volunteers";

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        // 초기 로딩 시 mock 데이터 설정
        setVolunteers(volunteersData);
    }, []);

    return (
        <>

            {volunteers.map((v) => (
                <VolunteerCard
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    profileImg={v.profileImg}
                />
            ))}
        </>

    );
};

export default VolunteerList;
