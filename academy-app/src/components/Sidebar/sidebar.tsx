import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconDashboards from "../images/iconDashboards";
import IconFrequencia from "../images/iconFrequencia";
import IconAreas from "../images/iconAreas";
import IconUsuarios from "../images/iconUsuarios";

function Sidebar() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className="fixed top-0 left-0 w-64 md:w-28 h-full"
        style={{ backgroundColor: "rgba(12, 42, 88, 1)" }}
      >
        <div className="text-white flex flex-col items-center">
          <div className="flex items-center justify-center py-4 border-b border-gray-700 w-full">
            <Image
              src={`/images/logoAcademy.png`}
              alt="Logo Academy"
              width={150}
              height={200}
              className="object-cover"
            />
          </div>
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
      <div className="flex-1 pl-64 md:pl-28 p-4"></div>
    </div>
  );
}

export default Sidebar;
