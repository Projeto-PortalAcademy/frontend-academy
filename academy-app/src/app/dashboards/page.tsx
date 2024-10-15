import React from "react";
import Estagiario from "@/components/Estagiario/estagiario";

const Dashboards = () => {
  const estagiarioData = {
    nome: "Amy Winehouse",
    area: "Ciência de dados",
    squad: "LSD",
    skills: ["Comunicação", "Organização", "Liderança", "Gestão do Tempo", "Criatividade"],
    tecnologias: ["Python", "Apache Spark", "Bitbucket", "Apache Beam", "Apache Airflow"],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboards</h1>
      <Estagiario {...estagiarioData} />
      <p>Conteúdo da página de dashboards.</p>
    </div>
  );
};

export default Dashboards;
