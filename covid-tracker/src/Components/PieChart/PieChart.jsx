import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";

const PieChart = () => {
  // Accessing the covid data from the state
  const covidData = useSelector((state) => state.covid.covidData);

  // Condition : if CovidData doesnt Exist
  if (!covidData) {
    return null; 
  }

  // Destructing Covid Data values
  const { confirmed, active, recovered, deaths } = covidData;

  const data = [
    {
      values: [confirmed, active, recovered, deaths],
      labels: ["Total", "Active Cases", "Recovered", "Deaths"],
      type: "pie",
    },
  ];

  return <div className="graph-representation"><Plot data={data} layout={{ title: "COVID-19 Distribution(Pie Chart)" }} /></div>;
};

export default PieChart;
