import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cloudthon.r-e.kr",
    headers: {
        "Content-Type": "application/json",
    },
});

// 토큰 자동 삽입 (원한다면)
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken"); // 반드시 값이 있어야 함
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        console.warn("⚠️ 토큰이 없습니다! Authorization 헤더가 비어있습니다.");
    }
    return config;
});
export default axiosInstance;
