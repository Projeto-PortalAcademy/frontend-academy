"use client";

import React, { useState } from "react";
import AttendanceTable from "@/components/PresenceTable/PresenceTable";

interface Student {
  id: number;
  name: string;
  status: "P" | "F" | "A";
}

const Frequencia = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "João", status: "P" },
    { id: 2, name: "Maria", status: "F" },
    { id: 3, name: "Ana", status: "A" },
  ]);

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
          : student,
      ),
    );
  };

  const handleAddComment = (id: number) => {
    alert(`Adicionar comentário para o aluno com ID: ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Frequência</h1>
      <AttendanceTable
        students={students}
        onToggleStatus={toggleStatus}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default Frequencia;
