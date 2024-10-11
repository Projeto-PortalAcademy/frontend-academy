import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch"
import PresenceChart from "@/components/PresenceChart/PresenceChart";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center ml-60">
        {/* Content */}
        <h1 className="text-3xl font-bold">Dashboards</h1>
      </div>

      {/* Filtro e Pesquisa posicionados conforme a imagem */}
      <div className="flex items-center justify-start space-x-4 mt-20">
        <FilterAndSearch />
      </div>

      {/* Gráfico de Presença */}
      <div className="ml-40 mt-10">
        <PresenceChart />
      </div>
      
    </div>
  );
}
