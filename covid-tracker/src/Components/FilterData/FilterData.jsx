// src/components/CovidTracker.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCovidData } from "../../Redux/action";
import { states } from "../../Data/states";
import "./FilterData.css";

const FilterData = () => {
  const dispatch = useDispatch();

  const covidData = useSelector((state) => state.covid.covidData);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    dispatch(fetchCovidData(selectedState));
  };

  return (
    <div className="data-container">
      <h1>COVID-19 Tracker - India</h1>
      <select onChange={handleStateChange} className="data-filter-input">
        <option value="">Select a State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      
      {/* Show Covid Data if data is fetched succesfully */}
      {covidData && (
        <div className="resultCard">
          <h2>Results for {covidData.state}</h2>
          <div className="display-data">
            <p>
              <strong>Total Cases :</strong> {covidData.confirmed}
            </p>
            <p>
              <strong>Active Cases :</strong> {covidData.active}
            </p>
            <p>
              <strong>Recovered :</strong> {covidData.recovered}
            </p>
            <p>
              <strong>Deaths :</strong> {covidData.deaths}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterData;
