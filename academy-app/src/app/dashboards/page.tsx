import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import PresenceChart from "@/components/PresenceChart/PresenceChart";
import Estagiario from "@/components/Estagiario/estagiario";

export default function Home() {

  const dadosEstagiario = {
    nome: "Camila Yatabe",
    area: "Engenharia de Dados",
    squad: "404 Not Found",
    imagem: "",
  };

  return (
    <div className="flex flex-col p-4">
      {/* Título */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Dashboards</h1>
      </div>

      {/* Filtro e Pesquisa */}
      <div className="flex items-center justify-start space-x-4 mt-10">
        <FilterAndSearch />
      </div>

      {/* Gráfico de Presença */}
      <div className="mt-10">
        <PresenceChart />
      </div>

      <Estagiario 
        nome={dadosEstagiario.nome}
        area={dadosEstagiario.area}
        squad={dadosEstagiario.squad}
        imagem={dadosEstagiario.imagem} 
      />
    </div>

  );
}