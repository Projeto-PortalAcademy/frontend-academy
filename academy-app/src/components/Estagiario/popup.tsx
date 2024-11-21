import React, { ChangeEvent, FC } from "react";

interface PopUpProps {
  titulo: string;
  valor: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  onClose: () => void;
  placeholder?: string;
}

const PopUp: FC<PopUpProps> = ({
  titulo,
  valor,
  onChange,
  onAdd,
  onClose,
  placeholder,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        minWidth: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{titulo}</h3>
        <span
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={onClose}
        >
          x
        </span>
      </div>

      <input
        type="text"
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={onAdd}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#002D62", // Azul para o botão
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default PopUp;
