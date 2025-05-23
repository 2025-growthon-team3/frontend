import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cloudthon.r-e.kr/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// 토큰 자동 삽입 (원한다면)
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default axiosInstance;
