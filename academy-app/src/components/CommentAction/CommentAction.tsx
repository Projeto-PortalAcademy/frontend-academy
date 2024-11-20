"use client";

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
      <div
        onClick={handleOpenModal}
        className="cursor-pointer inline-block"
        style={{ width: "76px", height: "76px" }}
      >
        <IconComments />
      </div>

      <AddObservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CommentAction;
