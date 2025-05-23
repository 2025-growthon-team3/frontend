import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axiosInstance from "../../../api/axiosInstance.js";
import MatchedVolunteerCard from "../MatchedVolunteerCard/MatchedVolunteerCard.jsx";

const ITEMS_PER_LOAD = 7;

const MatchedVolunteerList = () => {
  const [allList, setAllList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  // 1) 첫 렌더링 때 API 호출
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axiosInstance.get("/volunteer/history/all");
        if (res.status === 200 && res.data.success) {
          const list = res.data.data;
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
    fetchHistory();
  }, []);

  const loadMore = () => {
    const next = allList.slice(
      displayList.length,
      displayList.length + ITEMS_PER_LOAD
    );
    if (next.length === 0) {
      setHasMore(false);
      return;
    }
    setDisplayList((prev) => [...prev, ...next]);
  };

  const handleCardClick = (historyId) => {
    setExpandedId((prev) => (prev === historyId ? null : historyId));
  };

  if (!allList.length) {
    return (
      <p style={{ textAlign: "center", marginTop: 20 }}>
        아직 봉사 내역이 없습니다.
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
      {displayList.map((item) => (
        <MatchedVolunteerCard
          key={item.id}
          historyId={item.id}
          helpeeId={item.helpee.id}
          helpeeName={item.helpee.name}
          helpDetail={item.helpee.helpDetail}
          isExpanded={item.id === expandedId}
          onClick={() => handleCardClick(item.id)}
          helpTime={item.helpTime}
        />
      ))}
    </InfiniteScroll>
  );
};

export default MatchedVolunteerList;
