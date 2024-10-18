import React from "react";
import Estagiario from "@/components/Estagiario/estagiario";

const Usuarios = () => {
  const dadosEstagiario = {
    nome: "Camila Yatabe",
    area: "Engenharia de Dados",
    squad: "404 Not Found",
    imagem: "",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Usuários</h1>
      <Estagiario
        nome={dadosEstagiario.nome}
        area={dadosEstagiario.area}
        squad={dadosEstagiario.squad}
        imagem={dadosEstagiario.imagem}
      />
    </div>
  );
};

export default Usuarios;
