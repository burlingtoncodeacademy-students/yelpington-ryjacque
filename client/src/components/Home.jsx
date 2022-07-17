import React from "react";
import { NavLink } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import 'leaflet/dist/leaflet.css';
import "./Home.css";

function Home() {
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
          <Marker position={[44.48598, -73.20995]}>
            <Popup>
              <NavLink to="/tacogordo">Taco Gordo</NavLink>
            </Popup>
          </Marker>
          <Marker position={[44.48962, -73.21004]}>
            <Popup>
              <NavLink to="/poppycafe">Poppy Cafe</NavLink>, <br />
              <NavLink to="/cafemamajuana">Cafe Mamajuana</NavLink>
            </Popup>
          </Marker>
          <Marker position={[44.48501, -73.21117]}>
            <Popup>
              <NavLink to="/mauditepoutine">Maudite Poutine</NavLink>
            </Popup>
          </Marker>
          <Marker position={[44.48688, -73.20831]}>
            <Popup>
              <NavLink to="/mayday">May Day</NavLink>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Home;
