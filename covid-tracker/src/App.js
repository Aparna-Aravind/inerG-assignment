import "./App.css";
import FilterData from "./Components/FilterData/FilterData";
import LineChart from "./Components/LineChart/LineChart";
import MapView from "./Components/MapView/MapView";
import PieChart from "./Components/PieChart/PieChart";

function App() {
  return (
    <div className="container">
      <FilterData />
      <PieChart/>
      <LineChart/>
      <MapView/>
    </div>
  );
}

export default App;
