// src/components/ObservationModal.tsx
import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import ObservationCard from "@/components/Users/Observations/observationCard"; // Ajuste o caminho conforme necessário

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
  return (
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
        }}
      >
        <Typography id="observacoes-title" variant="h5" component="h2" mb={2}>
          Observações
        </Typography>

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
  );
};

export default ObservationModal;
