"use client";

import React, { useState, ChangeEvent } from "react";
import IconButton from "@/components/IconButton/button";
import { AiOutlineFileText, AiOutlinePlus } from "react-icons/ai";
import RoundImage from "../RoundImage/image";
import PopUp from "./popup";
import ObservationModal from "@/components/Observation/observationModal";

const skill_colors = ["#BE5989", "#7DA6C3", "#EEF5A0", "#8EC594", "#D398D4"];
const tech_colors = ["#8EC594", "#D398D4", "#EEF5A0", "#BE5989", "#7DA6C3"];

interface Observation {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface SkillOrTech {
  name: string;
  color: string;
}

interface EstagiarioProps {
  nome: string;
  area: string;
  squad: string;
  imagem: string;
}

const Estagiario: React.FC<EstagiarioProps> = ({
  nome,
  area,
  squad,
  imagem,
}) => {
  const [softSkills, setSoftSkills] = useState<SkillOrTech[]>([]);
  const [tecnologiasList, setTecnologiasList] = useState<SkillOrTech[]>([]);
  const [novaSkill, setNovaSkill] = useState<string>("");
  const [novaTecnologia, setNovaTecnologia] = useState<string>("");
  const [isSkillPopupOpen, setIsSkillPopupOpen] = useState<boolean>(false);
  const [isTechPopupOpen, setIsTechPopupOpen] = useState<boolean>(false);
  const [isObservationModalOpen, setIsObservationModalOpen] =
    useState<boolean>(false);
  const [observations, setObservations] = useState<Observation[]>([
    {
      id: 1,
      title: "Feedback Inicial",
      description: "Bom desempenho na primeira semana",
      date: "17/10/2024",
    },
    {
      id: 2,
      title: "Revisão Técnica",
      description: "Precisa melhorar na organização do código",
      date: "18/10/2024",
    },
  ]);

  const handleOpenObservationModal = () => setIsObservationModalOpen(true);
  const handleCloseObservationModal = () => setIsObservationModalOpen(false);

  const handleDeleteObservation = (id: number) => {
    setObservations(observations.filter((obs) => obs.id !== id));
  };

  const handleAddSkill = () => {
    if (novaSkill) {
      const newSkill: SkillOrTech = {
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
      const newTech: SkillOrTech = {
        name: novaTecnologia,
        color: tech_colors[tecnologiasList.length % tech_colors.length],
      };
      setTecnologiasList([...tecnologiasList, newTech]);
      setNovaTecnologia("");
      setIsTechPopupOpen(false);
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSoftSkills(softSkills.filter((_, i) => i !== index));
  };

  const handleRemoveTecnologia = (index: number) => {
    setTecnologiasList(tecnologiasList.filter((_, i) => i !== index));
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
            }}
          >
            Squad: {squad}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "3em", maxWidth: "100%" }}>
        <h3>Soft Skills</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {softSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: skill.color,
                padding: "4px 8px",
                borderRadius: "4px",
                minHeight: "40px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                position: "relative",
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
          <IconButton
            texto=""
            Icone={AiOutlinePlus}
            onClick={() => setIsSkillPopupOpen(true)}
          />
        </div>
      </div>

      {isSkillPopupOpen && (
        <PopUp
          titulo="Adicionar Soft Skill"
          valor={novaSkill}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNovaSkill(e.target.value)
          }
          onAdd={handleAddSkill}
          onClose={() => setIsSkillPopupOpen(false)}
          placeholder="Digite a Soft Skill"
        />
      )}

      <div style={{ marginTop: "3em", maxWidth: "100%" }}>
        <h3>Tecnologias</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tecnologiasList.map((tech, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tech.color,
                padding: "4px 8px",
                borderRadius: "4px",
                minHeight: "40px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                position: "relative",
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
          <IconButton
            texto=""
            Icone={AiOutlinePlus}
            onClick={() => setIsTechPopupOpen(true)}
          />
        </div>
      </div>

      {isTechPopupOpen && (
        <PopUp
          titulo="Adicionar Tecnologia"
          valor={novaTecnologia}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNovaTecnologia(e.target.value)
          }
          onAdd={handleAddTecnologia}
          onClose={() => setIsTechPopupOpen(false)}
          placeholder="Digite a Tecnologia"
        />
      )}

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <IconButton
          texto="OBSERVAÇÕES"
          Icone={AiOutlineFileText}
          onClick={handleOpenObservationModal}
        />
        <IconButton
          texto="GERAR RELATÓRIO"
          Icone={AiOutlineFileText}
          onClick={() => alert("Relatório gerado")}
        />
      </div>

      <ObservationModal
        open={isObservationModalOpen}
        onClose={handleCloseObservationModal}
        observations={observations}
        onDelete={handleDeleteObservation}
      />
    </div>
  );
};

export default Estagiario;
