"use client";

import React, { useState } from "react";
import IconButton from "@/components/IconButton/button";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import RoundImage from "../RoundImage/image"; // Ajuste o caminho conforme necessário

const skill_colors = ["#BE5989", "#7DA6C3", "#EEF5A0", "#8EC594", "#D398D4"];
const tech_colors = ["#8EC594", "#D398D4", "#EEF5A0", "#BE5989", "#7DA6C3"];

const Estagiario = ({ nome, area, squad, imagem }) => {
  const [softSkills, setSoftSkills] = useState([]);
  const [tecnologiasList, setTecnologiasList] = useState([]);
  const [novaSkill, setNovaSkill] = useState("");
  const [novaTecnologia, setNovaTecnologia] = useState("");
  const [isSkillPopupOpen, setIsSkillPopupOpen] = useState(false);
  const [isTechPopupOpen, setIsTechPopupOpen] = useState(false);

  const handleAddSkill = () => {
    if (novaSkill) {
      const newSkill = {
        name: novaSkill,
        color: skill_colors[softSkills.length % skill_colors.length],
      };
      setSoftSkills([...softSkills, newSkill]);
      setNovaSkill("");
      setIsSkillPopupOpen(false);
    }
  };

  const handleAddTecnologia = () => {
    if (novaTecnologia) {
      const newTech = {
        name: novaTecnologia,
        color: tech_colors[tecnologiasList.length % tech_colors.length],
      };
      setTecnologiasList([...tecnologiasList, newTech]);
      setNovaTecnologia("");
      setIsTechPopupOpen(false);
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = softSkills.filter((_, i) => i !== index);
    setSoftSkills(updatedSkills);
  };

  const handleRemoveTecnologia = (index) => {
    const updatedTecnologias = tecnologiasList.filter((_, i) => i !== index);
    setTecnologiasList(updatedTecnologias);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <RoundImage src={imagem} size={80} />
        <div>
          <h1 className="text-2xl font-bold">{nome}</h1>
          <p style={{ color: "black", fontWeight: "bold" }}>{area}</p>
          <p
            style={{
              backgroundColor: "rgba(82, 156, 166, 0.4)",
              color: "black",
              padding: "4px 8px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
              minWidth: "fit-content",
              maxWidth: "fit-content"
            }}
          >
            Squad: {squad}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "5em", maxWidth: "33%", }}>
        <h3>Soft Skills</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {softSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: skill.color, // ou tech.color
                color: "black",
                padding: "4px 8px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "14px",
                position: "relative",
                minWidth: "fit-content",
                maxWidth: "fit-content",
                minHeight: "40px", // Define uma altura mínima para manter os cards consistentes
                display: "flex", // Garante que o conteúdo interno tenha layout consistente
                alignItems: "center", // Alinha o conteúdo verticalmente
                textTransform: "uppercase",

              }}
            >
              {skill.name}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                  
                }}
                onClick={() => handleRemoveSkill(index)}
              >
                x
              </span>
            </div>
          ))}
          <IconButton texto="" Icone={AiOutlinePlus} onClick={() => setIsSkillPopupOpen(true)}/>
        </div>

        {isSkillPopupOpen && (
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <input
              type="text"
              value={novaSkill}
              onChange={(e) => setNovaSkill(e.target.value)}
              placeholder="Adicionar Skill"
              style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "8px" }}
            />
            <button onClick={handleAddSkill}>Adicionar</button>
          </div>
        )}
      </div>

      <div style={{ marginTop: "5em", maxWidth: "33%", }}>
        <h3>Tecnologias</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tecnologiasList.map((tech, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tech.color, // ou tech.color
                color: "black",
                padding: "4px 8px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontSize: "14px",
                position: "relative",
                minWidth: "fit-content",
                maxWidth: "fit-content",
                minHeight: "40px", // Define uma altura mínima para manter os cards consistentes
                display: "flex", // Garante que o conteúdo interno tenha layout consistente
                alignItems: "center", // Alinha o conteúdo verticalmente
                textTransform: "uppercase",

              }}
            >
              {tech.name}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleRemoveTecnologia(index)}
              >
                x
              </span>
            </div>
          ))}
          <IconButton texto="" Icone={AiOutlinePlus} onClick={() => setIsTechPopupOpen(true)} />
        </div>

        {isTechPopupOpen && (
          <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <input
              type="text"
              value={novaTecnologia}
              onChange={(e) => setNovaTecnologia(e.target.value)}
              placeholder="Adicionar Tecnologia"
              style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "8px" }}
            />
            <button onClick={handleAddTecnologia}>Adicionar</button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <IconButton texto="OBSERVAÇÕES" Icone={AiOutlineFileText} onClick={() => alert("Observações")} />
        <IconButton texto="GERAR RELATÓRIO" Icone={AiOutlineFileText} onClick={() => alert("Relatório gerado")} />
      </div>
    </div>
  );
};

export default Estagiario;
