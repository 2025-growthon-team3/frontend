import React, { useEffect, useState } from "react";
import { volunteers } from "../../../mock/volunteers.js";
import InfiniteScroll from "react-infinite-scroll-component";
import UnmatchedVolunteerCard from "../UnmatchedVolunteerCard/UnmatchedVolunteerCard.jsx";

const UnmatchedVolunteerList = () => {
    const [displayList, setDisplayList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

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

    const handleCardClick = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
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
                <UnmatchedVolunteerCard
                    key={v.helpeeId}
                    {...v}
                    isExpanded={v.helpeeId === expandedId}
                    onClick={() => handleCardClick(v.helpeeId)}
                />
            ))}
        </InfiniteScroll>
    );
};

export default UnmatchedVolunteerList;
