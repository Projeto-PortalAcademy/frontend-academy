import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconDashboards from "../images/iconDashboards";
import IconFrequencia from "../images/iconFrequencia";
import IconAreas from "../images/iconAreas";
import IconUsuarios from "../images/iconUsuarios";

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className="w-64 md:w-28 h-screen"
        style={{ backgroundColor: "rgba(12, 42, 88, 1)" }}
      >
        <div className="text-white flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center justify-center py-4 border-b border-gray-700">
            <Image
              src={`/images/logoAcademy.png`}
              alt="Logo Academy"
              width={150}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Menu items */}
          <nav className="mt-10 flex flex-col items-center space-y-4 w-full">
            <Link
              href="/frequencia"
              className="flex items-center justify-center w-full py-2 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <IconFrequencia className="h-10 w-10 md:h-16 md:w-16" />
            </Link>

            <Link
              href="/dashboards"
              className="flex items-center justify-center w-full py-2 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <IconDashboards className="h-10 w-10 md:h-16 md:w-16" />
            </Link>

            <Link
              href="/areas"
              className="flex items-center justify-center w-full py-2 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <IconAreas className="h-10 w-10 md:h-16 md:w-16" />
            </Link>

            <Link
              href="/usuarios"
              className="flex items-center justify-center w-full py-2 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <IconUsuarios className="h-10 w-10 md:h-16 md:w-16" />
            </Link>
          </nav>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 p-4">
        {/* Aqui você renderiza o conteúdo das páginas */}
      </div>
    </div>
  );
}

export default Sidebar;
