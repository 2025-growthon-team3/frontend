import React, { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard.jsx";
import volunteersData from "../../../mock/volunteers.js";
import InfiniteScroll from "react-infinite-scroll-component";

const VolunteerList = () => {
    const [displayList, setDisplayList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    const ITEMS_PER_LOAD = 7;

    useEffect(() => {
        // 초기 로딩 시 일부 데이터만 보여줌
        setDisplayList(volunteersData.slice(0, ITEMS_PER_LOAD));
    }, []);

    const loadMore = () => {
        const currentLength = displayList.length;
        const nextItems = volunteersData.slice(currentLength, currentLength + ITEMS_PER_LOAD);

        if (nextItems.length === 0) {
            setHasMore(false);
            return;
        }

        setDisplayList([...displayList, ...nextItems]);
    };

    const handleCardClick = (id) => {
        setExpandedId((prev) => (prev === id ? null : id)); // 토글
    };

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center" }}>로딩 중...</h4>}
            scrollableTarget="scrollableDiv"
        >
            {displayList.map((v) => (
                <VolunteerCard
                    key={v.id}
                    {...v}
                    isExpanded={v.id === expandedId}
                    onClick={() => handleCardClick(v.id)}
                />
            ))}
        </InfiniteScroll>
    );
};

export default VolunteerList;
