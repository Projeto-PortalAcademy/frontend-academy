// src/components/ObservationCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface ObservationCardProps {
  title: string;
  description: string;
  date: string;
  onDelete: () => void;
}

const ObservationCard: React.FC<ObservationCardProps> = ({
  title,
  description,
  date,
  onDelete,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "8px auto",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            data: {date}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" mt={1}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          onClick={onDelete}
          sx={{ marginLeft: "auto" }}
        >
          Excluir
        </Button>
      </CardActions>
    </Card>
  );
};

export default ObservationCard;
