import Header from "@/components/Header/header";
import Sidebar from "../components/Sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
            {/* Content */}
      <div className="flex-1">
        <Header />
          {/* Conteúdo aqui!!! */}
      </div>
    </div>
  );
}
