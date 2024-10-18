import React from 'react';

const EvaluationHeader = () => {
  return (
    <div className=" text-sm from-neutral-900">
      <h1 className="text-lg font-bold mb-6">Templates de avaliação</h1>
      <div className="flex space-x-4 mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Avaliação template 1</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Avaliação template 2</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Avaliação Técnica</button>
      </div>
    </div>
  );
};

export default EvaluationHeader;
