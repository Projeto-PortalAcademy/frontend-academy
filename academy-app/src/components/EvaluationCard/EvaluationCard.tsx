import React from "react";

interface EvaluationCardProps {
  id: number;
  avaliado: string;
  avaliador: string;
  data: string;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({
  id,
  avaliado,
  avaliador,
  data,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded mb-4 flex justify-between">
      <div>
        <h2 className="font-bold text-lg">{id}. Avaliação</h2>
        <p>Avaliado: {avaliado}</p>
        <p>Avaliador: {avaliador}</p>
        <p>{data}</p>
      </div>
      <button className="text-gray-500">...</button>
    </div>
  );
};

export default EvaluationCard;
