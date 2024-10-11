import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FilterAndSearch: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4 space-x-4">
      {/* Filtro por */}
      <div className="flex items-center text-sm">
        <label htmlFor="filtro" className="mr-2 font-medium">
          Filtrar por:
        </label>
        <select
          id="filtro"
          className="border border-blue-500 text-gray-700 p-1 rounded-md text-sm focus:ring focus:ring-blue-200 focus:outline-none"
        >
          <option value="option1">Opção 1</option>
          <option value="option2">Opção 2</option>
        </select>
      </div>

      {/* Barra de pesquisa */}
      <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Pesquisar"
          className="p-1 text-sm focus:outline-none"
        />
        <button className="p-1 text-gray-600">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default FilterAndSearch;
