import React, { useState } from "react";
import { Modal, Box, Typography, IconButton, Button } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import ObservationCard from "@/components/Observation/observationCard";
import AddObservationModal from "@/components/AddObservationModal/AddObservationModal";

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
  setObservations: React.Dispatch<React.SetStateAction<Observation[]>>;
  onDelete: (id: number) => void;
}

const ObservationModal: React.FC<ObservationModalProps> = ({
  open,
  onClose,
  observations,
  setObservations,
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

  const handleAddObservation = (newObservation: Omit<Observation, "id">) => {
    const observationWithId = {
      id: observations.length + 1,
      ...newObservation,
    };

    setObservations((prev) => [...prev, observationWithId]);
    handleCloseAddObservationModal();
  };

  return (
    <>
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
            zIndex: 1300, // Prioridade para o modal principal
          }}
        >
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

      <AddObservationModal
        isOpen={isAddObservationModalOpen}
        onClose={handleCloseAddObservationModal}
        onAddObservation={handleAddObservation}
      />
    </>
  );
};

export default ObservationModal;
