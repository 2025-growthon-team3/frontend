import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import TabBar from "../../components/TabBar/TabBar";
import * as L from "./LocationPage.style";
import axios from "axios";

// image
import myPin from "../../assets/images/songilPinIcon.png";
import ongiPin from "../../assets/images/ongiPinIcon.png";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 37.5665,
  lng: 126.978,
};

const LocationPage = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [institutions, setInstitutions] = useState([]);

  // 내 위치
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("위치 가져오기 실패:", error);
      }
    );
  }, []);

  // 기관 위치
  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/institution/location`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data.success) {
          setInstitutions(res.data.data);
        } else {
          console.error("기관 정보 조회 실패:", res.data.message);
        }
      } catch (err) {
        console.error("기관 위치 요청 오류:", err);
      }
    };

    fetchInstitutions();
  }, []);

  return (
    <L.Container>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} icon={myPin} />
        {institutions.map((inst) => (
          <Marker
            key={inst.id}
            position={{ lat: inst.lat, lng: inst.lng }}
            icon={ongiPin}
          />
        ))}
      </GoogleMap>
      <TabBar type="songil" index={0} />
    </L.Container>
  );
};

export default LocationPage;
