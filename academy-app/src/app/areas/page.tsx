"use client"

import Area from "@/components/userPerArea/boxArea";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

type User = string;

export default function Areas() {
  const [areas, setAreas] = useState([
    { title: "Ciência de dados", userCount: 3, userIconColor: "#6A9ACD" },
    { title: "Engenharia de dados", userCount: 2, userIconColor: "#7BBF85" },
    { title: "Front-end", userCount: 4, userIconColor: "#6CBED4" },
    { title: "Machine Learning", userCount: 2, userIconColor: "#C188D4" },
    { title: "DevOps", userCount: 2, userIconColor: "#D4A66A" },
    { title: "Back-end", userCount: 3, userIconColor: "#D47878" },
  ]);

  const [open, setOpen] = useState(false);
  const [newAreaName, setNewAreaName] = useState("");
  const [users, setUsers] = useState<User[]>([]); 
  const [selectedUser, setSelectedUser] = useState<User>("");

  const addArea = () => {
    const newArea = {
      title: newAreaName || "Nova área",
      userCount: users.length,
      userIconColor: "#B0B0B0",
    };
    setAreas([...areas, newArea]);
    setOpen(false);
    setNewAreaName("");
    setUsers([]);
  };

  const handleAddUser = () => {
    if (selectedUser && !users.includes(selectedUser)) {
      setUsers([...users, selectedUser]);
      setSelectedUser("");
    }
  };

  const handleRemoveUser = (user: User) => {
    setUsers(users.filter((u) => u !== user));
  };


  return (
    <Box p={4} sx={{ overflowX: "hidden", maxWidth: "100vw", boxSizing: "border-box" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Usuários por áreas
      </Typography>
      <AppBar position="static" elevation={0} sx={{ mb: 4, backgroundColor: "white", width: "100%" }}>
        <Toolbar>
          <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
            <InputLabel>Filtrar por:</InputLabel>
            <Select label="Filtrar por">
              <MenuItem value="Todos">Todos</MenuItem>
              <MenuItem value="Ciência de dados">Ciência de dados</MenuItem>
              <MenuItem value="Engenharia de dados">Engenharia de dados</MenuItem>
              <MenuItem value="Front-end">Front-end</MenuItem>
              <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              <MenuItem value="DevOps">DevOps</MenuItem>
              <MenuItem value="Back-end">Back-end</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Pesquisar" variant="outlined" sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
        gap={4}
        sx={{ maxWidth: "100%", overflowX: "hidden", boxSizing: "border-box" }}
      >
        {areas.map((area, index) => (
          <Area key={index} title={area.title} userCount={area.userCount} userIconColor={area.userIconColor} />
        ))}
      </Box>
      <Tooltip title="Adicionar novo time" arrow>
        <Fab
          color="primary"
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "black",
            "&:hover": { backgroundColor: "gray" },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ textAlign: "center", color: "black", marginBottom:"10px" }}>
          Adicionar Squad
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <TextField
            label="Nome da área"
            fullWidth
            value={newAreaName}
            onChange={(e) => setNewAreaName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Escolha usuários</InputLabel>
            <Select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
              <MenuItem value="Matheus Elis">Matheus Elis</MenuItem>
              <MenuItem value="Ronaldo Moreira">Ronaldo Moreira</MenuItem>
              <MenuItem value="Gustavo Silva">Gustavo Silva</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Adicionar usuário" arrow>
            <Fab
              color="primary"
              onClick={handleAddUser}
              sx={{
                backgroundColor: "#4963bf",
                color: "white",
                mt: 2,
                "&:hover": { backgroundColor: "#2b396b" },
              }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {users.map((user, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f0f0",
                  borderRadius: 1,
                  padding: "4px 8px",
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <Box sx={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>{user}</Box>
                <IconButton size="small" onClick={() => handleRemoveUser(user)} sx={{ ml: 1, flexShrink: 0 }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={addArea}
            sx={{ backgroundColor: "#4963bf", "&:hover": { backgroundColor: "#2b396b" } }}
            variant="contained"
          >
            ADICIONAR
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
