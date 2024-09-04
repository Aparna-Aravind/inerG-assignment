import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import predefinedCoordinates from "../../Data/coordinates";

// Default icon Fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapView = () => {
  const covidData = useSelector((state) => state.covid.covidData);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    if (covidData) {
      setMapData([covidData]);
    }
  }, [covidData]);

  return (
    <div className="mapview">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "500px", width: "100%", border: "solid 2px skyblue", "margin-top": "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapData.map((stateData) => {
          // Destructing State value along with other Covid Data to get its position to display in Map View
          const { state, confirmed, active, recovered, deaths } = stateData;
          const position = predefinedCoordinates[state] || [0, 0];

          return (
            <Marker key={state} position={position}>
              <Popup>
                <div>
                  <strong>{state}</strong>
                  <p>Total Cases: {confirmed}</p>
                  <p>Active Cases: {active}</p>
                  <p>Recovered: {recovered}</p>
                  <p>Deaths: {deaths}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
