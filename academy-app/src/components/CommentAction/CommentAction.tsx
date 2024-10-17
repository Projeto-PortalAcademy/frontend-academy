"use client"; // Adicionando a diretiva de client-side para o Next.js

import React, { useState } from "react";
import IconComments from "../images/iconComments";
import AddObservationModal from "../AddObservationModal/AddObservationModal";

const CommentAction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Ícone clicável para abrir o modal */}
      <div
        onClick={handleOpenModal}
        className="cursor-pointer inline-block"
        style={{ width: '76px', height: '76px' }} // Definindo o tamanho da div igual ao do SVG
      >
        <IconComments />
      </div>

      {/* Modal de adicionar observação */}
      <AddObservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CommentAction;