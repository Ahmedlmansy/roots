"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapContent({
  position,
}: {
  position: [number, number];
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
        minHeight: "400px",
        borderRadius: "1rem",
        zIndex: 0,
      }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div style={{ textAlign: "center" }}>
            <strong>موقعنا</strong>
            <br />
            يمكنك التواصل معنا هنا
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
