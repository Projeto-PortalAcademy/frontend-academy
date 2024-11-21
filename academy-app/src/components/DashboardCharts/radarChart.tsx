"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    "Data Science",
    "Backend",
    "Frontend",
    "Data Engineering",
    "Cloud Computing",
    "DevOps",
  ],
  datasets: [
    {
      label: "Habilidades",
      data: [70, 80, 60, 50, 40, 30],
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderColor: "rgba(0, 123, 255, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(0, 123, 255, 1)",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    r: {
      angleLines: { display: true },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const RadarChart: React.FC = () => {
  return <Radar data={data} options={options} />;
};

export default RadarChart;
