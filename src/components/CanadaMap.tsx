// components/CanadaMap.tsx
"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CanadaMap = () => {
  return (
    <MapContainer
      center={[56.1304, -106.3468]} // Center of Canada
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default CanadaMap;
