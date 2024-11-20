'use client'; // Garante que é um Client Component

import React, { useState } from "react";
import UserTable from "@/components/UserTable/userTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const Usuarios: React.FC = () => {
  const initialUsers: User[] = [
    { id: 1, name: "Sergio R. Nascimento", email: "sergiorjcj7@gmail.com", role: "Avaliador" },
    { id: 2, name: "Felipe Camargo", email: "felipecamargo@gmail.com", role: "Estagiário" },
    { id: 3, name: "Gabriel Ramos", email: "ramosgab69@gmail.com", role: "Estagiário" },
    { id: 4, name: "Luana Seres", email: "luhseres@gmail.com", role: "Estagiário" },
    { id: 5, name: "Vinicius Antunes", email: "vinianunes@gmail.com", role: "Estagiário" },
    { id: 6, name: "Lucas M. Pereira", email: "luquinhaspera@gmail.com", role: "Estagiário" },
    { id: 7, name: "Thiago Tavares", email: "tavares007@gmail.com", role: "Estagiário" },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = (id: number) => {
    const confirmDelete = confirm(`Você tem certeza que deseja deletar o usuário com ID ${id}?`);
    if (confirmDelete) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      alert(`Usuário com ID ${id} foi deletado.`);
    }
  };

  const handleViewPage = (id: number) => {
    alert(`Abrindo a página do usuário com ID ${id}.`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Mantém o espaço distribuído entre colunas
        alignItems: "center",
        width: "85%",
        margin: "20px auto",
        gap: "30px",
      }}
    >
      <div style={{ flex: 1, maxWidth: "400px" }}>
        <Estagiario
          nome={dadosEstagiario.nome}
          area={dadosEstagiario.area}
          squad={dadosEstagiario.squad}
          imagem={dadosEstagiario.imagem}
        />
      </div>

      {/* Gráficos em linha */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly", // Centraliza os gráficos horizontalmente
          width: "100%", // Garante que ambos os gráficos se distribuam bem
          gap: "50px",
        }}
      >
        <div style={{ width: "600px", height: "600px", marginRight: "auto" }}>
          <RadarChart />
        </div>
        <div style={{ width: "300px", height: "300px" }}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Usuarios;