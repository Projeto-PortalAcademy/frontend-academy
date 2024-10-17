"use client";
import { useState } from "react";

type Status = "P" | "A" | "F"; 
export default function Presence() {
  const [status, setStatus] = useState<Status>("P");

  const statusColors: Record<Status, string> = {
    P: "bg-[#8EC594]",
    A: "bg-[#DEAA46]",
    F: "bg-[#BC4545]",
  };

  const handleClick = async () => {
    const nextStatus: Status =
      status === "P" ? "A" : status === "A" ? "F" : "P";
    setStatus(nextStatus);
  };


  return (
    <div
      onClick={handleClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-black text-1xl ${statusColors[status]}`}
    >
      {status}
    </div>
  );
}
