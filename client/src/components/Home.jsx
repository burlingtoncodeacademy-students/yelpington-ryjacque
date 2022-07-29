import React from "react";
import { NavLink } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import 'leaflet/dist/leaflet.css';
import "./Home.css";

function Home(props) {
  const allData = props.allData;
  return (
    <>
      <div id="map" style={{ height: "80%", width: "60VW", margin: "5vh" }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[44.48746, -73.20814]}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {allData.map((business) => {
            return (
              <Marker position={business.coordinates}>
                <Popup>
                  <NavLink to={business.path}>{business.name}</NavLink>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
}

export default Home;
