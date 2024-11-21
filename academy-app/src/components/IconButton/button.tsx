import React, { MouseEvent, FC, CSSProperties } from "react";

interface IconButtonProps {
  texto: string;
  Icone?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disableHover?: boolean;
  style?: CSSProperties;
}

const IconButton: FC<IconButtonProps> = ({
  texto,
  Icone,
  onClick,
  disableHover = false,
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        backgroundColor: "#f4f4f4",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        color: "#000",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: disableHover ? "none" : "background-color 0.2s",
        ...style,
      }}
      onMouseOver={(e) => {
        if (!disableHover) e.currentTarget.style.backgroundColor = "#e0e0e0";
      }}
      onMouseOut={(e) => {
        if (!disableHover) e.currentTarget.style.backgroundColor = "#f4f4f4";
      }}
    >
      {Icone && <Icone size={24} style={{ marginRight: "8px" }} />}
      {texto}
    </button>
  );
};

export default IconButton;
