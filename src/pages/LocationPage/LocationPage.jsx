import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import TabBar from "../../components/TabBar/TabBar";
import * as L from "./LocationPage.style";

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

  return (
    <L.Container>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <Marker position={center} icon={myPin} />
        </GoogleMap>
      </LoadScript>
      <TabBar type="songil" index={0} />
    </L.Container>
  );
};

export default LocationPage;
