import React from "react";
import { FaChevronDown, FaUserCircle, FaBell } from "react-icons/fa"; // Ícones do react-icons

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-end w-full py-4 px-8">
      {" "}
      {/* Removi a classe 'border-b border-gray-200' */}
      {/* Ícone de Sino */}
      <div className="mr-4">
        <FaBell className="text-gray-800" size={20} />{" "}
        {/* Ícone de sino ajustado */}
      </div>
      {/* Ícone de Avatar do Usuário */}
      <div className="mr-4">
        <FaUserCircle className="text-gray-800" size={30} />{" "}
        {/* Ajuste o tamanho com 'size' */}
      </div>
      {/* Nome do usuário */}
      <div className="text-gray-800 text-sm font-semibold">
        Vinicius Antunes
      </div>
      {/* Ícone de seta para baixo */}
      <div className="ml-2 mt-1">
        {" "}
        {/* Ajuste de margem */}
        <FaChevronDown className="text-gray-500" size={14} />
      </div>
    </header>
  );
};

export default Header;
