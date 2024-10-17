import Area from "@/components/userPerArea/boxArea";
import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";


export default function Areas() {
  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Usuários por áreas
      </Typography>
      <AppBar position="static" color="white" elevation={0} sx={{ mb: 4 }}>
        <Toolbar>
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
            <InputLabel>Filtrar por:</InputLabel>
            <Select label="Filtrar por">
              <MenuItem value="Todos">Todos</MenuItem>
              <MenuItem value="Ciência de dados">Ciência de dados</MenuItem>
              <MenuItem value="Engenharia de dados">
                Engenharia de dados
              </MenuItem>
              <MenuItem value="Front-end">Front-end</MenuItem>
              <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              <MenuItem value="DevOps">DevOps</MenuItem>
              <MenuItem value="Back-end">Back-end</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Pesquisar"
            variant="outlined"
            sx={{ flexGrow: 1 }}
          />
        </Toolbar>
      </AppBar>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
        gap={4}
      >
        <Area title="Ciência de dados" userCount={3} userIconColor="#6A9ACD" />
        <Area
          title="Engenharia de dados"
          userCount={2}
          userIconColor="#7BBF85"
        />
        <Area title="Front-end" userCount={4} userIconColor="#6CBED4" />
        <Area title="Machine Learning" userCount={2} userIconColor="#C188D4" />
        <Area title="DevOps" userCount={2} userIconColor="#D4A66A" />
        <Area title="Back-end" userCount={3} userIconColor="#D47878" />
      </Box>
    </Box>
  );
}
