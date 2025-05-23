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

    useEffect(() => {
        const fetchUnmatched = async () => {
            try {
                const res = await axiosInstance.get("/helpee/unmatched");
                if (res.data.success) {
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

    return (
        <Container>
            {helpees.map((h) => (
                <UnmatchedVolunteerCard
                    key={h.id}
                    helpeeId={h.id}
                    name={h.name}
                    institution={h.institution.name}
                />
            ))}
        </Container>
    );
};

export default UnmatchedVolunteerList;
