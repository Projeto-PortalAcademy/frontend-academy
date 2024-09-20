import React from 'react';

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64" style={{ backgroundColor: 'rgba(12, 42, 88, 1)' }}>
        <div className="text-white flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center py-4 border-b border-gray-700">
            <img
              src="/image/LOGO_2RP_acad.png" // Caminho do logo
              alt="Logo"
              className="h-16"
            />
          </div>
          
          {/* Menu items */}
          <nav className="mt-10">
            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <img
                src="/image/Frequencia.svg" // Caminho da imagem Frequência
                alt="Frequência"
                className="h-6 w-6 mb-1" // Margem inferior para espaçamento
              />
              Frequência
            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <img
                src="/image/dashboards.svg" // Caminho para imagem vazia
                alt="Dashboards"
                className="h-6 w-6 mb-1" // Margem inferior para espaçamento
              />
              Dashboards
            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <img
                src="/image/areas.svg" // Caminho para imagem vazia
                alt="Áreas"
                className="h-6 w-6 mb-1" // Margem inferior para espaçamento
              />
              Áreas
            </a>

            <a
              href="#"
              className="flex flex-col items-center py-2 px-6 text-white hover:bg-blue-700"
            >
              <img
                src="/image/usuarios.svg" // Caminho para imagem vazia
                alt="Usuários"
                className="h-6 w-6 mb-1" // Margem inferior para espaçamento
              />
              Usuários
            </a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-10">
        {/* Aqui vai o conteúdo da página */}
        <h1 className="text-3xl font-semibold">Dashboards</h1>
        {/* Gráfico ou outro conteúdo */}
      </div>
    </div>
  );
}

export default Sidebar;