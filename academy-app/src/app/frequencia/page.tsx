"use client";

import React, { useState } from "react";
import AttendanceTable from "@/components/PresenceTable/PresenceTable";
import AddObservationModal from "@/components/AddObservationModal/AddObservationModal";

interface Student {
  id: number;
  name: string;
  status: "P" | "F" | "A";
}

const Frequencia = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Camila Yukari Yatabe", status: "P" },
    { id: 2, name: "Vinicius de Morais Lino", status: "F" },
    { id: 3, name: "Vinicius Antunes", status: "A" },
    { id: 4, name: "Thiago Tavares Silva", status: "P" },
    { id: 5, name: "Guilherme Martins", status: "F" },
    { id: 6, name: "Matheus Pajé da Mata", status: "A" },
    { id: 7, name: "Thiago Tavares Silva", status: "P" },
    { id: 8, name: "Felipe Camargo", status: "F" },
    { id: 9, name: "Sérgio Nascimento", status: "A" },
  ]);

  const [isAddObservationModalOpen, setIsAddObservationModalOpen] =
    useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  );

  const toggleStatus = (id: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "P"
                  ? "F"
                  : student.status === "F"
                  ? "A"
                  : "P",
            }
          : student
      )
    );
  };

  const handleAddComment = (id: number) => {
    setSelectedStudentId(id); // Armazena o ID do aluno selecionado
    setIsAddObservationModalOpen(true); // Abre o modal
  };

  const handleCloseAddObservationModal = () => {
    setIsAddObservationModalOpen(false); // Fecha o modal
    setSelectedStudentId(null); // Reseta o ID do aluno selecionado
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Frequência</h1>
      <AttendanceTable
        students={students}
        onToggleStatus={toggleStatus}
        onAddComment={handleAddComment}
      />
      <AddObservationModal
        isOpen={isAddObservationModalOpen}
        onClose={handleCloseAddObservationModal}
      />
    </div>
  );
};

export default Frequencia;
