import { FC } from "react";
import "./App.css";
import { GoogleChartsGauge, ReactGaugeChart, SemiDonut } from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <SemiDonut />
    </div>
  );
};
