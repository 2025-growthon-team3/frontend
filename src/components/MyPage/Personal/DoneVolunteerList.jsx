import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DoneVolunteerCard from "./DoneVolunteerCard/DoneVolunteerCard.jsx";
import axiosInstance from "/src/api/axiosInstance.js";
const DoneVolunteerList = () => {
    const [allList, setAllList] = useState([]);      // 전체 데이터
    const [displayList, setDisplayList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const ITEMS_PER_LOAD = 7;

    useEffect(() => {
        const fetchDone = async () => {
            try {
                const res = await axiosInstance.get("/volunteer/history/all");
                if (res.data.success) {
                    const list = res.data.data;   // [] 또는 실제 데이터
                    setAllList(list);
                    setDisplayList(list.slice(0, ITEMS_PER_LOAD));
                    setHasMore(list.length > ITEMS_PER_LOAD);
                } else {
                    console.error("API 에러:", res.data.message);
                }
            } catch (err) {
                console.error("네트워크 에러:", err);
            }
        };
        fetchDone();
    }, []);

    const loadMore = () => {
        const next = allList.slice(
            displayList.length,
            displayList.length + ITEMS_PER_LOAD
        );
        setDisplayList(prev => [...prev, ...next]);
        if (displayList.length + next.length >= allList.length) {
            setHasMore(false);
        }
    };
    if (!allList.length) {
        return <p style={{ textAlign: "center", marginTop: 20 }}>아직 봉사 내역이 없습니다.</p>;
    }

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center" }}>로딩 중...</h4>}
            scrollableTarget="scrollableDiv"
        >
            {displayList.map(item => (
                <DoneVolunteerCard
                    key={item.id}
                    helpTime={item.helpTime}
                    helpee={item.helpee}
                />
            ))}
        </InfiniteScroll>
    );

};

export default DoneVolunteerList;
