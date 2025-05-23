import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ApplyVolunteerCard from "./ApplyVolunteerCard.jsx";
import axiosInstance from "../../../api/axiosInstance.js";

const ITEMS_PER_LOAD = 7;

const ApplyVolunteerList = () => {
    const [allApplications, setAllApplications] = useState([]);  // 전체 데이터
    const [displayList, setDisplayList] = useState([]);         // 화면에 보이는 슬라이스
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                const res = await axiosInstance.get("/volunteer", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                if (res.status === 200 && res.data.success) {
                    const list = res.data.data;  // [{ id, status, isCompleted, helpee:{ id, name } }, …]
                    setAllApplications(list);
                    setDisplayList(list.slice(0, ITEMS_PER_LOAD));
                    setHasMore(list.length > ITEMS_PER_LOAD);
                } else {
                    console.error("API 에러:", res.data.message || res.status);
                }
            } catch (err) {
                console.error("네트워크 에러:", err);
            }
        };

        fetchApplications();
    }, []);

    const loadMore = () => {
        const next = allApplications.slice(
            displayList.length,
            displayList.length + ITEMS_PER_LOAD
        );
        if (next.length === 0) {
            setHasMore(false);
            return;
        }
        setDisplayList(prev => [...prev, ...next]);
    };

    // 전체 리스트가 비어 있으면 안내문
    if (!allApplications.length) {
        return (
            <p style={{ textAlign: "center", marginTop: 20 }}>
                아직 봉사 신청 내역이 없습니다.
            </p>
        );
    }

    return (
        <InfiniteScroll
            dataLength={displayList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center" }}>로딩 중...</h4>}
            scrollableTarget="scrollableDiv"
            style={{ cursor: "default" }}
        >
            {displayList.map(item => (
                <ApplyVolunteerCard
                    key={item.id}
                    name={item.helpee.name}
                    age={item.helpee.age}
                    gender={item.helpee.gender}
                    helpDetail={item.helpee.helpDetail}
                    status={item.status}
                />
            ))}
        </InfiniteScroll>
    );
};

export default ApplyVolunteerList;
