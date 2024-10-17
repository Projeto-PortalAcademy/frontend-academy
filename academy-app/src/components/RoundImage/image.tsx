import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai"; // Importando o ícone de usuário

const RoundImage = ({ src, alt = "foto aqui", size = 100 }) => {
  const [imageError, setImageError] = useState(false); // Estado para detectar erro na imagem

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff", // Fundo branco como no exemplo enviado
      }}
    >
      {imageError || !src ? (
        <AiOutlineUser size={size * 0.6} color="#000" /> // Ícone preto
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)} // Se erro, exibe o ícone
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Mantém a proporção da imagem
          }}
        />
      )}
    </div>
  );
};

export default RoundImage;
