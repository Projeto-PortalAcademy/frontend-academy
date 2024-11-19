"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PresenceChart: React.FC = () => {
  const data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Presença Média (%)",
        data: [85, 90, 78, 88, 76, 92, 80, 87, 85, 90, 89, 91],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Média de Presença por Mês",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: function (value: any) {
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Média de Presença</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PresenceChart;
