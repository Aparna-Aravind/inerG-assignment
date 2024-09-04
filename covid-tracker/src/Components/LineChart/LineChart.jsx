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
      type: "scatter",
      mode: "lines+markers",
      name: "Total Cases",
      line: { color: "blue" },
    },
    {
      x: ["Recovered"],
      y: [recovered],
      type: "scatter",
      mode: "lines+markers",
      name: "Recovered",
      line: { color: "green" },
    },
    {
      x: ["Deaths"],
      y: [deaths],
      type: "scatter",
      mode: "lines+markers",
      name: "Deaths",
      line: { color: "red" },
    },
    {
      x: ["Active Cases"],
      y: [active],
      type: "scatter",
      mode: "lines+markers",
      name: "Active Cases",
      line: { color: "orange" },
    },
  ];

  return (
    <div className="graph-representation">
      <Plot
        data={data}
        layout={{
          title: "COVID-19 Cases : Line Chart Representation",
          xaxis: { title: "Case Category" },
          yaxis: { title: "Number of Cases" },
        }}
      />
    </div>
  );
};

export default LineChart;
