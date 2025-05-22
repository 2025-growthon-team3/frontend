import React, { useEffect, useState } from "react";
import axios from "/src/api/axiosInstance.js";
import MatchingCard from "../MatchingCard/MatchingCard.jsx";

const MatchingList = () => {
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        axios.get("/volunteer?status=requested").then((res) => {
            console.log("데이터 확인용:", res.data);
            setDisplayList(res.data.data);
        });
    }, []);

    const handleDecision = async (volunteerId, newStatus) => {
        try {
            const res = await axios.post(`/api/volunteer/${volunteerId}`, {
                status: newStatus,
            });

            if (res.data.success) {
                setDisplayList((prev) =>
                    prev.filter((v) => v.volunteerId !== volunteerId)
                );
            } else {
                console.error("서버 응답 실패:", res.data.message);
            }
        } catch (error) {
            console.error("API 오류:", error);
        }
    };

    return (
        <>
            {Array.isArray(displayList) && displayList.map((v) => (
                <MatchingCard
                    key={v.volunteerId}
                    volunteerId={v.volunteerId}
                    name={v.name}
                    age={v.age}
                    gender={v.gender}
                    helpRequest={v.helpRequest}
                    onDecision={handleDecision}
                />
            ))}
        </>
    );
};

export default MatchingList;
