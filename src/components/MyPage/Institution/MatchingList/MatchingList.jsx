import React, { useState } from "react";
import MatchingCard from "../MatchingCard/MatchingCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const dummyData = Array(10).fill({
    volunteerName: "김민서",
    gender: "여성",
    age: 23,
    experience: 2,
});

const MatchingList = () => {
    const [displayList, setDisplayList] = useState(dummyData);

    const handleDecision = (index, status) => {
        //여기에 서버에 status(approved/rejected) 전달하는 API 연결 예정
        console.log(`index: ${index}, status: ${status}`);
        setDisplayList(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            hasMore={false}
            scrollableTarget="scrollableDiv"
            style={{ cursor: "default" }}
        >
            {displayList.map((v, index) => (
                <div key={index}>
                    <MatchingCard
                        name={`김민서 → ${v.volunteerName}`}
                        age={v.age}
                        gender={v.gender}
                        experience={v.experience}
                        onApprove={() => handleDecision(index, "approved")}
                        onReject={() => handleDecision(index, "rejected")}
                    />
                </div>
            ))}
        </InfiniteScroll>
    );
};

export default MatchingList;
