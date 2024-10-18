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
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Isso permite ajustar a altura e a largura
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#4B5563", // Cor personalizada para o texto da legenda
          font: {
            size: 14,
            family: "Arial",
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "Média de Presença por Mês",
        color: "#1F2937", // Cor personalizada para o título
        font: {
          size: 18,
          family: "Arial",
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove a grid do eixo x para um visual mais limpo
        },
        ticks: {
          color: "#6B7280", // Cor dos rótulos no eixo x
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number) {
            return value + "%";
          },
          color: "#6B7280", // Cor dos rótulos no eixo y
        },
        grid: {
          color: "#E5E7EB", // Cor personalizada para a grid do eixo y
        },
      },
    },
  };

  return (
    <div className="mt-10">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-[800px] mx-auto">
        {/* Definindo altura do gráfico */}
        <div className="h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PresenceChart;
