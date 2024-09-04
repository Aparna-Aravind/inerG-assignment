import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";

const LineChart = () => {
  const covidData = useSelector((state) => state.covid.covidData);

  if (!covidData) {
    return null;
  }

  const { confirmed, active, recovered, deaths } = covidData;

  const data = [
    {
      x: ["Total Cases"],
      y: [confirmed],
      type: "bar",
      name: "Total Cases",
      marker: { color: "blue" },
    },
    {
      x: ["Recovered"],
      y: [recovered],
      type: "bar",
      name: "Recovered",
      marker: { color: "green" },
    },
    {
      x: ["Deaths"],
      y: [deaths],
      type: "bar",
      name: "Deaths",
      marker: { color: "red" },
    },
    {
      x: ["Active Cases"],
      y: [active],
      type: "bar",
      name: "Active Cases",
      marker: { color: "orange" },
    },
  ];

  return (
    <div className="graph-representation">
      <Plot
        data={data}
        layout={{
          title: "COVID-19 Cases Overview",
          barmode: "group",
          xaxis: { title: "Case Category" },
          yaxis: { title: "Number of Cases" },
        }}
      />
    </div>
  );
};

export default LineChart;
