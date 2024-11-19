import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";

interface RoundImageProps {
  src: string;
  alt?: string;
  size?: number;
}

const RoundImage: React.FC<RoundImageProps> = ({ src, alt = "foto aqui", size = 100 }) => {
  const [imageError, setImageError] = useState(false);

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
        backgroundColor: "#fff",
      }}
    >
      {imageError || !src ? (
        <AiOutlineUser size={size * 0.6} color="#000" />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          onError={() => setImageError(true)}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}
    </div>
  );
};

export default RoundImage;
