import { FC } from "react";
import "./App.css";
import { GoogleChartsBar, GoogleChartsGauge, ReactGaugeChart, SemiDonut } from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <GoogleChartsBar />
      <SemiDonut />
    </div>
  );
};
