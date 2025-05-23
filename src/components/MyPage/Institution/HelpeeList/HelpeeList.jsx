import React, { useEffect, useState } from "react";
import { volunteers } from "../../../../mock/volunteers.js";
import InfiniteScroll from "react-infinite-scroll-component";
import HelpeeCard from "../HelpeeCard/HelpeeCard.jsx";

const HelpeeList = () => {
    const [displayList, setDisplayList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const ITEMS_PER_LOAD = 30;

    useEffect(() => {
        setDisplayList(volunteers.slice(0, ITEMS_PER_LOAD));
    }, []);

    const loadMore = () => {
        console.log("loadMore 호출됨!")
        const currentLength = displayList.length;
        const nextItems = volunteers.slice(currentLength, currentLength + ITEMS_PER_LOAD);

        if (nextItems.length === 0) {
            setHasMore(false);
            return;
        }

        setDisplayList([...displayList, ...nextItems]);
    };

    const handleDelete = (helpeeId) => {
        setDisplayList(prev => prev.filter(item => item.helpeeId !== helpeeId));
    };

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center" }}>로딩 중...</h4>}
            scrollableTarget="scrollableDiv"
            style={{ cursor: "default" }}
        >
            {displayList.map((v) => (
                <div key={v.helpeeId} style={{ cursor: "default" }}>
                    <HelpeeCard
                        {...v}
                        onDelete={() => handleDelete(v.helpeeId)}
                    />
                </div>
            ))}
        </InfiniteScroll>
    );
};

export default HelpeeList;