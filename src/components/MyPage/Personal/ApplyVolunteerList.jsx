import React, { useEffect, useState } from "react";
import { volunteers } from "../../../mock/volunteers.js";
import InfiniteScroll from "react-infinite-scroll-component";
import ApplyVolunteerCard from "./ApplyVolunteerCard.jsx";

const ApplyVolunteerList = () => {
    const [displayList, setDisplayList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const ITEMS_PER_LOAD = 7;

    useEffect(() => {
        setDisplayList(volunteers.slice(0, ITEMS_PER_LOAD));
    }, []);

    const loadMore = () => {
        const currentLength = displayList.length;
        const nextItems = volunteers.slice(currentLength, currentLength + ITEMS_PER_LOAD);

        if (nextItems.length === 0) {
            setHasMore(false);
            return;
        }

        setDisplayList([...displayList, ...nextItems]);
    };

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center", cursor: "default" }}>로딩 중...</h4>}
            scrollableTarget="scrollableDiv"
            style={{ cursor: "default" }} // 리스트 전체에 커서 변경 없음
        >
            {displayList.map((v) => (
                <div key={v.helpeeId} style={{ cursor: "default" }}>
                    <ApplyVolunteerCard {...v} />
                </div>
            ))}
        </InfiniteScroll>
    );
};

export default ApplyVolunteerList;
