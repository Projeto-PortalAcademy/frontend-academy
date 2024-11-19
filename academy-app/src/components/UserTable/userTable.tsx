import React from "react";
import { FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";

// Definição do tipo para os usuários
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

// Props do componente UserTable
interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
  onViewPage: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, onViewPage }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-200 px-4 py-2 text-left">E-mail</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Função</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">{user.name}</td>
              <td className="border border-gray-200 px-4 py-2">{user.email}</td>
              <td className="border border-gray-200 px-4 py-2">{user.role}</td>
              <td className="border border-gray-200 px-4 py-2 flex justify-center space-x-2">
                {/* Botão para deletar */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 flex items-center"
                  onClick={() => onDelete(user.id)}
                >
                  <FaTrashAlt size={16} className="mr-2" />
                  Deletar
                </button>
                {/* Botão para acessar página */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 flex items-center"
                  onClick={() => onViewPage(user.id)}
                >
                  <FaExternalLinkAlt size={16} className="mr-2" />
                  Página
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
