import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 너가 가져온 설정을 여기에 복붙!
const firebaseConfig = {
    apiKey: "AIzaSyDRlIV6NACzXjRWHp_zdZT-2VJNnaqdHxo",
    authDomain: "growthon-1f554.firebaseapp.com",
    projectId: "growthon-1f554",
    storageBucket: "growthon-1f554.firebasestorage.app",
    messagingSenderId: "587768654167",
    appId: "1:587768654167:web:6e717f90bb038198a6b612",
    measurementId: "G-128XQQMBTQ"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 연결 객체 export
export const db = getFirestore(app);