"use client";
import React, { useState } from "react";
import EvaluationHeader from "@/components/EvaluationHeader/EvaluationHeader";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import EvaluationCard from "@/components/EvaluationCard/EvaluationCard";
import CreateEvaluationButton from "@/components/CreateEvaluationButton/CreateEvaluationButton";

interface EvaluationData {
  id: number;
  avaliado: string;
  avaliador: string;
  data: string;
}

export default function Home() {
  const [evaluations, setEvaluations] = useState<EvaluationData[]>([
    { id: 1, avaliado: "Felipe Camargo", avaliador: "Rodney Rick", data: "05/11/2024" },
    { id: 2, avaliado: "Erick Cassoli", avaliador: "Rodney Rick", data: "28/10/2024" },
    { id: 3, avaliado: "Vinicius Lino", avaliador: "Thiago Kaijyama", data: "24/09/2024" },
    { id: 4, avaliado: "Vinicius Lino", avaliador: "Thiago Kaijyama", data: "24/09/2024" },
  ]);

  // Função para adicionar uma nova avaliação
  const addEvaluation = (newEvaluation: Omit<EvaluationData, "id">) => {
    setEvaluations((prev) => [
      ...prev,
      { id: prev.length + 1, ...newEvaluation }, // Adiciona com um ID incremental
    ]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold">Avaliações</h1>
      </div>

      {/* Header com Botões */}
      <EvaluationHeader />

      {/* Filtro e Barra de Pesquisa */}
      <FilterAndSearch />

      {/* Lista de Cards de Avaliação */}
      <div>
        {evaluations.map((evaluation) => (
          <EvaluationCard
            key={evaluation.id}
            id={evaluation.id}
            avaliado={evaluation.avaliado}
            avaliador={evaluation.avaliador}
            data={evaluation.data}
            onClick={(id) => console.log("Card clicado com ID: ", id)}
          />
        ))}
      </div>

      {/* Botão de Criar Avaliação */}
      <CreateEvaluationButton onCreate={addEvaluation} />
    </div>
  );
}
