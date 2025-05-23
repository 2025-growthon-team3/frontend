// src/components/HomePage/Personal/UnmatchedVolunteerList.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "/src/api/axiosInstance";
import UnmatchedVolunteerCard from "../UnmatchedVolunteerCard/UnmatchedVolunteerCard";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
`;

const NoData = styled.p`
    text-align: center;
    margin-top: 20px;
`;

const Loading = styled.p`
    text-align: center;
    margin-top: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    margin-top: 20px;
`;

const UnmatchedVolunteerList = () => {
    const [helpees, setHelpees] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const fetchUnmatched = async () => {
            try {
                const res = await axiosInstance.get("/helpee/nearby");
                if (res.data.success && Array.isArray(res.data.data)) {
                    setHelpees(res.data.data);
                } else {
                    setError(res.data.message || "데이터를 불러올 수 없습니다.");
                }
            } catch (err) {
                console.error("네트워크 에러:", err);
                setError("서버 요청 실패");
            } finally {
                setLoading(false);
            }
        };
        fetchUnmatched();
    }, []);

    if (loading) {
        return <Loading>로딩 중...</Loading>;
    }

    if (error) {
        return <ErrorMessage>에러: {error}</ErrorMessage>;
    }

    if (helpees.length === 0) {
        return <NoData>현재 도움 요청 헬피가 없습니다.</NoData>;
    }

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
            {helpees.map((h) => (
                <UnmatchedVolunteerCard
                    key={h.id}
                    helpeeId={h.id}                        // id를 사용하도록 변경
                    name={h.name}
                    age={h.age}
                    gender={h.gender}
                    helpRequest={h.helpRequestDetail}
                    helpDetail={h.helpDetail}
                    isExpanded={h.id === expandedId}     // 비교 대상도 id로 변경
                    onClick={() => handleCardClick(h.id)} // 클릭 시 id를 전달
                />
            ))}
        </InfiniteScroll>
    );
};

export default UnmatchedVolunteerList;
