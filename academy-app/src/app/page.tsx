import CommentAction from "@/components/CommentAction/CommentAction";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center ml-60">
        {/* Content */}

        <h1 className="text-3xl font-bold">NADA</h1>
      </div>

      {/* Filtro e Pesquisa posicionados conforme a imagem */}
      <div className="flex items-center justify-start space-x-4 mt-20"></div>

      {/* Gráfico de Presença */}
      <div className="ml-40 mt-10"></div>
    </div>
  );
}
