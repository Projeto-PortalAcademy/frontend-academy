import React, { useState } from "react";
import { Modal, Box, Typography, IconButton, Button } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material"; // Ícone de fechar (X)
import ObservationCard from "@/components/Observation/observationCard"; // Ajuste o caminho conforme necessário
import AddObservationModal from "@/components/AddObservationModal/AddObservationModal"; // Importa o modal de adicionar observação

// Define o tipo para uma observação
interface Observation {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface ObservationModalProps {
  open: boolean;
  onClose: () => void;
  observations: Observation[];
  onDelete: (id: number) => void;
}

const ObservationModal: React.FC<ObservationModalProps> = ({
  open,
  onClose,
  observations,
  onDelete,
}) => {
  const [isAddObservationModalOpen, setIsAddObservationModalOpen] =
    useState(false);

  const handleOpenAddObservationModal = () => {
    setIsAddObservationModalOpen(true);
  };

  const handleCloseAddObservationModal = () => {
    setIsAddObservationModalOpen(false);
  };

  return (
    <>
      {/* Modal de Observações */}
      <Modal open={open} onClose={onClose} aria-labelledby="observacoes-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
            zIndex: 1000, // Garante um z-index mais baixo que o outro modal
          }}
        >
          {/* Botão de Fechar (X) */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography id="observacoes-title" variant="h5" component="h2" mb={2}>
            Observações
          </Typography>

          {/* Botão Adicionar */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenAddObservationModal}
            sx={{
              mb: 2,
              textTransform: "none",
            }}
          >
            Adicionar
          </Button>

          {observations.length > 0 ? (
            observations.map((observation) => (
              <ObservationCard
                key={observation.id}
                title={observation.title}
                description={observation.description}
                date={observation.date}
                onDelete={() => onDelete(observation.id)}
              />
            ))
          ) : (
            <Typography>Carregando observações...</Typography>
          )}
        </Box>
      </Modal>

      {/* Modal de Adicionar Observação */}
      <Modal
        open={isAddObservationModalOpen}
        onClose={handleCloseAddObservationModal}
        aria-labelledby="add-observation-title"
        sx={{ zIndex: 1500 }} // Garante um z-index maior que o modal anterior
      >
        <div>
          <AddObservationModal
            isOpen={isAddObservationModalOpen}
            onClose={handleCloseAddObservationModal}
          />
        </div>
      </Modal>
    </>
  );
};

export default ObservationModal;
