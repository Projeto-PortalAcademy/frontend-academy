import React from "react";
//import Header from "../Header/header"; // Importe o Header
import Image from "next/image";
import IconDashboards from "../images/iconDashboards";
import IconFrequencia from "../images/iconFrequencia";
import IconAreas from "../images/iconAreas";
import IconUsuarios from "../images/iconUsuarios";

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64" style={{ backgroundColor: "rgba(12, 42, 88, 1)" }}>
        <div className="text-white flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center py-4 border-b border-gray-700">
          <Image
              src={`/images/logoAcademy.png`}
              alt="Logo Academy"
              width={150}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Menu items */}
          <nav className="mt-10">
            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <IconFrequencia className="h-16 w-60" />

              
            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <IconDashboards className="h-16 w-60" />

            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <IconAreas className="h-16 w-60" />

            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <IconUsuarios className="h-16 w-60" />
            </a>
          </nav>
        </div>
      </div>


    </div>
  );
}

export default Sidebar;
