"use client"; // Garante que é um Client Component

import React from "react";
import Estagiario from "@/components/Estagiario/estagiario";
import RadarChart from "@/components/DashboardCharts/radarChart";
import PieChart from "@/components/DashboardCharts/pieChart";

const Usuarios = () => {
  const dadosEstagiario = {
    nome: "Amy Winehouse",
    area: "Ciência de dados",
    squad: "Squad LSD",
    imagem: "",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        margin: "20px auto",
        gap: "30px",
      }}
    >
      <div style={{ flex: 1, maxWidth: "400px" }}>
        <Estagiario
          nome={dadosEstagiario.nome}
          area={dadosEstagiario.area}
          squad={dadosEstagiario.squad}
          imagem={dadosEstagiario.imagem}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "50px",
        }}
      >
        <div style={{ width: "600px", height: "600px", marginRight: "auto" }}>
          <RadarChart />
        </div>
        <div style={{ width: "300px", height: "300px" }}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
