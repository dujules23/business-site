import React from "react";
import { MapInfo, MapWrapper } from "./MapElements";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
const Map = () => {
  return (
    <>
      <MapInfo>
        {`Q & Sons `}
        <br />
        Port Wentworth, Georiga <br />
        <span>email@email.com</span>
      </MapInfo>
      <MapWrapper>
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[44.96366, 19.61045]}></Marker>
        </MapContainer>
      </MapWrapper>
    </>
  );
};

export default Map;
