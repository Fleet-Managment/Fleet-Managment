import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";

const blueMarkerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [map, setMap] = useState(null); // Store map instance

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = [position.coords.latitude, position.coords.longitude];
      setPosition(currentPosition);
    });
  }, []);

  useEffect(() => {
    if (map) {
      if (startPoint && endPoint) {
        L.Routing.control({
          waypoints: [
            L.latLng(startPoint.lat, startPoint.lng),
            L.latLng(endPoint.lat, endPoint.lng),
          ],
        }).addTo(map);
      }
    }
  }, [map, startPoint, endPoint]);

  const handleGeocode = async (placeName, callback) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=90cb82730bdc4942aa2eb6b6bdf30339`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const firstResult = data.results[0];
        const coordinates = firstResult.geometry;

        if (callback) {
          callback(coordinates);
        }
      } else {
        console.error("No results found for the provided place name.");
      }
    } catch (error) {
      console.error("Error geocoding place:", error);
    }
  };

  const handleRouting = () => {
    if (startPoint && endPoint && map) {
      L.Routing.control({
        waypoints: [
          L.latLng(startPoint.lat, startPoint.lng),
          L.latLng(endPoint.lat, endPoint.lng),
        ],
      }).addTo(map);
    }
  };

  return (
    <div className="map-container">
      {position && (
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "400px" }}
          whenCreated={setMap} // Capture the map instance
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={blueMarkerIcon}>
            <Popup>Your current location</Popup>
          </Marker>
        </MapContainer>
      )}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Start Point (Place Name)"
          onChange={(e) => {
            setStartPoint(null);
            handleGeocode(e.target.value, (coordinates) => setStartPoint(coordinates));
          }}
        />
        <input
          type="text"
          placeholder="End Point (Place Name)"
          onChange={(e) => {
            setEndPoint(null);
            handleGeocode(e.target.value, (coordinates) => setEndPoint(coordinates));
          }}
        />
        <button onClick={() => {
          if (map) {
            map.eachLayer((layer) => {
              if (layer instanceof L.Routing.Itinerary) {
                layer.removeFrom(map);
              }
            });
          }
          handleRouting();
        }}>Find Route</button> 
        </div>
    </div>
  );
};

export default MapComponent;
