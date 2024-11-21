import React, { useState } from "react";
import IconButton from "../IconButton/button";
import PresenceStatus from "./PresenceStatus";
import { FaHistory, FaCommentAlt } from "react-icons/fa";

type Student = {
  id: number;
  name: string;
  status: "P" | "F" | "A";
};

type AttendanceTableProps = {
  students: Student[];
  onToggleStatus: (id: number) => void;
  onAddComment: (id: number) => void;
};

const AttendanceTable: React.FC<AttendanceTableProps> = ({
  students,
  onToggleStatus,
  onAddComment, // Recebe a função onAddComment
}) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10),
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6 space-x-2">
        <div>
          <span className="text-lg font-bold mr-4">Registrar dia:</span>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-white px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
        </div>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">Alunos</th>
            <th className="px-4 py-2 text-center">Presença</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-2 text-center flex justify-center items-center">
                {student.name}
              </td>
              <td className="px-4 py-2 text-center">
                <PresenceStatus
                  status={student.status}
                  onClick={() => onToggleStatus(student.id)}
                />
              </td>
              <td className="px-4 py-2 text-center flex justify-center items-center"></td>
              <td className="px-4 py-2 items-center">
                <IconButton
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  texto=""
                  Icone={FaCommentAlt}
                  disableHover={true}
                  onClick={() => onAddComment(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
