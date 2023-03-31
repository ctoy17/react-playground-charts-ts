import { FC } from "react";
import Chart from "react-google-charts";

const data = [
    ["Material", "weight"],
    ["Galv 70", 400],
    ["Paint Grip -61", 258],
    ["Stainless Steel - 64", 448],
    ["Stainless Steel - 65", 110],
    ["Aluminum - 66", 540],
    ["G90 - 68", 400],
    ["Black Iron - 67", 690]
  ];
  
  const options = {
    chart: {
      title: "Department H",
      subtitle: "Weight by Material",
    },
  };
  
  export const GoogleChartsBar: FC = () => {
    return (
        <div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      </div>
    );
  }
  