import React from "react";

type PresenceStatusProps = {
  status: "P" | "F" | "A"; // P para Presença, F para Falta, A para Atestado
  onClick: () => void;
};

const PresenceStatus: React.FC<PresenceStatusProps> = ({ status, onClick }) => {
  const getColor = () => {
    switch (status) {
      case "P":
        return "bg-[#8EC594]"; // Verde para presença
      case "F":
        return "bg-[#BC4545]"; // Vermelho para falta
      case "A":
        return "bg-[#DEAA46]"; // Amarelo para atestado
      default:
        return "bg-gray-300"; // Cinza como fallback
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-full ${getColor()}`}
    >
      <span className="text-black font-bold">{status}</span>
    </button>
  );
};

export default PresenceStatus;
