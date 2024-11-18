import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

type User = {
  label: string;
  color: string;
};

export default function UserIcon({ label, color }: User) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor={color}
        borderRadius="50%"
        width={96}
        height={96}
      >
        <Avatar sx={{ bgcolor: "black", width: 48, height: 48 }} />
      </Box>
      <Typography mt={2} fontSize="small" fontWeight="bold">
        {label}
      </Typography>
    </Box>
  );
}
