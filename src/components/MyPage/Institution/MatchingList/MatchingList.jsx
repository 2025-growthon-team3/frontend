import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchingCard from "../MatchingCard/MatchingCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const helperNames = [
  "이정우",
  "박하늘",
  "정가영",
  "최도윤",
  "김서현",
  "한지후",
  "윤채원",
];
const getRandomHelperName = () => {
  const index = Math.floor(Math.random() * helperNames.length);
  return helperNames[index];
};

const getRandomExperience = () => Math.floor(Math.random() * 5) + 1; // 1~5

const MatchingList = () => {
  const [displayList, setDisplayList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMatchingList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/volunteer/requested`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        const enhancedList = res.data.data.map((item) => ({
          ...item,
          helperName: getRandomHelperName(),
          experience: getRandomExperience(),
        }));
        setDisplayList(enhancedList);
      }
    } catch (err) {
      console.error("매칭 리스트 불러오기 실패:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDecision = (index, status) => {
    console.log(`index: ${index}, status: ${status}`);
    setDisplayList((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchMatchingList();
  }, []);

  return (
    <InfiniteScroll
      dataLength={displayList.length}
      hasMore={false}
      scrollableTarget="scrollableDiv"
      style={{ cursor: "default" }}
    >
      {!loading && displayList.length === 0 && <p>요청된 매칭이 없습니다.</p>}
      {displayList.map((item, index) => {
        const { helpee, helperName, experience } = item;
        return (
          <div key={helpee.id}>
            <MatchingCard
              name={`${helperName} → ${helpee.name}`}
              age={helpee.age}
              gender={helpee.gender}
              experience={experience}
              onApprove={() => handleDecision(index, "approved")}
              onReject={() => handleDecision(index, "rejected")}
            />
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default MatchingList;
