// pages/index.tsx
import React from "react";
import EvaluationHeader from "../components/EvaluationHeader/EvaluationHeader";
import FilterAndSearch from "../components/FilterAndSearch/FilterAndSearch";
import EvaluationCard from "../components/EvaluationCard/EvaluationCard";
import CreateEvaluationButton from "../components/CreateEvaluationButton/CreateEvaluationButton";

export default function Home() {
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
        <EvaluationCard
          id={1}
          avaliado="Vinicius Lino"
          avaliador="Thiago Kaijyama"
          data="24/09/2024"
        />
        <EvaluationCard
          id={2}
          avaliado="Vinicius Lino"
          avaliador="Thiago Kaijyama"
          data="24/09/2024"
        />
        <EvaluationCard
          id={3}
          avaliado="Vinicius Lino"
          avaliador="Thiago Kaijyama"
          data="24/09/2024"
        />
        <EvaluationCard
          id={4}
          avaliado="Vinicius Lino"
          avaliador="Thiago Kaijyama"
          data="24/09/2024"
        />
      </div>

      {/* Botão de Criar Avaliação */}
      <CreateEvaluationButton />
    </div>
  );
}
