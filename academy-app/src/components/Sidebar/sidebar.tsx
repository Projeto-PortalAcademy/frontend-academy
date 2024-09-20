import React from 'react';

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center py-4 border-b border-gray-700">
          <img
            src="https://your-logo-url.com" // Substitua pelo caminho da sua logo
            alt="Logo"
            className="h-16"
          />
        </div>
        
        {/* Menu items */}
        <nav className="mt-10">
          <a
            href="#"
            className="flex items-center py-2 px-6 text-white hover:bg-blue-700"
          >
            <i className="fas fa-calendar-check mr-3"></i> {/* Ícone da Frequência */}
            Frequência
          </a>

          <a
            href="#"
            className="flex items-center py-2 px-6 text-white hover:bg-blue-700"
          >
            <i className="fas fa-chart-bar mr-3"></i> {/* Ícone dos Dashboards */}
            Dashboards
          </a>

          <a
            href="#"
            className="flex items-center py-2 px-6 text-white hover:bg-blue-700"
          >
            <i className="fas fa-layer-group mr-3"></i> {/* Ícone das Áreas */}
            Áreas
          </a>

          <a
            href="#"
            className="flex items-center py-2 px-6 text-white hover:bg-blue-700"
          >
            <i className="fas fa-users mr-3"></i> {/* Ícone dos Usuários */}
            Usuários
          </a>
        </nav>
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