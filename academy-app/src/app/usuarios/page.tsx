'use client'; // Garante que é um Client Component

import React, { useState } from "react";
import UserTable from "@/components/UserTable/userTable";

const Usuarios: React.FC = () => {
  // Dados iniciais dos usuários
  const initialUsers: User[] = [
    { id: 1, name: "Sergio R. Nascimento", email: "sergiorjcj7@gmail.com", role: "Avaliador" },
    { id: 2, name: "Felipe Camargo", email: "felipecamargo@gmail.com", role: "Estagiário" },
    { id: 3, name: "Gabriel Ramos", email: "ramosgab69@gmail.com", role: "Estagiário" },
    { id: 4, name: "Luana Seres", email: "luhseres@gmail.com", role: "Estagiário" },
    { id: 5, name: "Vinicius Antunes", email: "vinianunes@gmail.com", role: "Estagiário" },
    { id: 6, name: "Lucas M. Pereira", email: "luquinhaspera@gmail.com", role: "Estagiário" },
    { id: 7, name: "Thiago Tavares", email: "tavares007@gmail.com", role: "Estagiário" },
  ];

  // Estado para a lista de usuários
  const [users, setUsers] = useState<User[]>(initialUsers);

  // Função para deletar um usuário
  const handleDelete = (id: number) => {
    const confirmDelete = confirm(`Você tem certeza que deseja deletar o usuário com ID ${id}?`);
    if (confirmDelete) {
      // Atualiza o estado removendo o usuário com o ID correspondente
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      alert(`Usuário com ID ${id} foi deletado.`);
    }
  };

  // Função para acessar a página do usuário
  const handleViewPage = (id: number) => {
    alert(`Abrindo a página do usuário com ID ${id}.`);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Usuários</h1>
      <UserTable users={users} onDelete={handleDelete} onViewPage={handleViewPage} />
    </div>
  );
};

export default Usuarios;
