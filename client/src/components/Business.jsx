import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Business.css";

function Business(props) {
  const [restaurantData, setRestaurantData] = useState("");
  const [coordinates, setCoordinates] = useState([44.48746, -73.20814]);
  const [marker, setMarker] = useState([44.48598, -73.20995]);
  const [address, setAddress] = useState([]);
  //initial values for coordinates to avoid "undefined"
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/" + props.fetchPath);
      //fetch path from server
      let data = await res.json();
      setRestaurantData(data);
      setCoordinates(data.coordinates);
      setMarker(data.name);
      setAddress(data.address);
    }
    getData();
  }, [props.fetchPath]);

  console.log(restaurantData);
  return (
    <>
      <div id="page-content">
        <div id="table-wrapper">
          <h2>{restaurantData.name}</h2>
          <table>
            <tr>
              <td>
                <strong>Cuisine</strong>:
              </td>
              <td>{restaurantData.cuisine}</td>{" "}
            </tr>
            <tr>
              <td>
                <strong>Address</strong>:
              </td>
              <td>
                {address[0]}
                <br />
                {address[1]}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong>:
              </td>
              <td>
                <a href={`tel: ${restaurantData.phone}`}>
                  {restaurantData.phone}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hours</strong>:
              </td>
              <td>{restaurantData.hours}</td>
            </tr>
          </table>
          <p>{restaurantData.about}</p>
        </div>
        <div id="map" style={{ height: '60vh', width: "40VW" }}>
          <MapContainer
            style={{ height: '100%', width: "100%" }}
            center={coordinates}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
              <Popup>{marker}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Business;
