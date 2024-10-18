'use client';

import React from 'react';

const CustomPieChart: React.FC = () => {
  const size = 300; // Aumenta o tamanho desejado aqui
  const data = [80, 20]; // Presença e Faltas
  const colors = ['#6CA0DC', '#D9534F']; // Azul e Vermelho

  const circumference = 2 * Math.PI * 50; // Circunferência do círculo base
  const offsets = data.map((value, index) =>
    data.slice(0, index).reduce((acc, v) => acc + (v / 100) * circumference, 0)
  );

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ overflow: 'visible' }}>
      {data.map((value, index) => (
        <circle
          key={index}
          r="50"
          cx="60"
          cy="60"
          fill="transparent"
          stroke={colors[index]}
          strokeWidth="25"
          strokeDasharray={`${(value / 100) * circumference} ${circumference}`}
          strokeDashoffset={-offsets[index]}
        />
      ))}
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="5">
        {`Presença: ${data[0]}%`}
      </text>
    </svg>
  );
};

export default CustomPieChart;