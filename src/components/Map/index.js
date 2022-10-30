import React from "react";
import { MapInfo, MapWrapper } from "./MapElements";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Map/map.scss";

const Map = () => {
  return (
    <div>
      <div className="info-map">
        {`Q & Sons `}
        <br />
        Port Wentworth, Georiga <br />
        <span>email@email.com</span>
      </div>

      <div className="map-wrap">
        <MapContainer center={[32.1491, -81.1632]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[32.1491, -81.1632]}></Marker>
        </MapContainer>
      </div>

      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};

export default Map;
