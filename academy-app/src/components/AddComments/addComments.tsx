'use client';

import { useState } from 'react';

interface AddCommentsProps {
  onClose: () => void;
}

const AddComments: React.FC<AddCommentsProps> = ({ onClose }) => {
  const [data, setData] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = () => {
    console.log({ data, titulo, descricao });
    handleClose();
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white w-[400px] rounded-lg shadow-lg relative">
        {/* Cabeçalho azul */}
        <div className="relative">
          <div className="bg-blue-800 text-white px-4 py-6 rounded-t-lg">
            <h2 className="text-center text-lg font-semibold">Adicionar observação</h2>
          </div>
          {/* Botão Fechar */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-lg hover:text-gray-200"
          >
            ✖
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-4">
          {/* Campo de Data */}
          <div className="mb-4">
            <label htmlFor="data" className="block text-sm font-medium text-gray-700">
              Data:
            </label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Campo de Título */}
          <div className="mb-4">
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
              Título:
            </label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Atraso"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Campo de Descrição */}
          <div className="mb-6">
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição:
            </label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Chegou atrasado pois teve que ir no PoupaTempo retirar documentos"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>

          {/* Botão de Adicionar */}
          <button
            onClick={handleSubmit}
            className="w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mx-auto block"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComments;