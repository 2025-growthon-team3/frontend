// src/pages/TestPage.jsx
import React from "react";
import axios from "/src/api/axiosInstance";

const TestPage = () => {
    const testPost = async () => {
        try {
            const res = await axios.post("/api/volunteer/3", {
                status: "approved",
            });
            console.log("✅ 응답 결과:", res.data);
        } catch (err) {
            console.error("❌ 오류:", err);
        }
    };

    return (
        <div style={{ padding: "50px" }}>
            <h2>테스트 페이지</h2>
            <button onClick={testPost}>봉사자 상태 업데이트 테스트</button>
        </div>
    );
};

export default TestPage;
