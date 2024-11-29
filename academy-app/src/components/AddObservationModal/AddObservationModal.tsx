import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

interface AddObservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddObservation: (observation: {
    title: string;
    description: string;
    date: string;
  }) => void;
}

const AddObservationModal: React.FC<AddObservationModalProps> = ({
  isOpen,
  onClose,
  onAddObservation,
}) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    onAddObservation({ title, description, date });
    setDate("");
    setTitle("");
    setDescription("");
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="add-observation-title"
      sx={{
        zIndex: 1400, // Garantir que este modal esteja na frente
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography id="add-observation-title" variant="h6" mb={2}>
          Adicionar Observação
        </Typography>

        <TextField
          label="Data"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Título"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleAdd}
        >
          Adicionar
        </Button>
      </Box>
    </Modal>
  );
};

export default AddObservationModal;
