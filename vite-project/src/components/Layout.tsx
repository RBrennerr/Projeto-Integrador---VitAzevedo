import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";

// Layout principal do site (usado nas páginas públicas)
export function Layout() {
  return (
    // Container geral da página
    <div className="min-h-screen flex flex-col bg-[#ebe5d9] text-[#0c0e0c]">

      {/* Cabeçalho do site */}
      <Header />

      {/* Área onde as páginas são renderizadas */}
      <main className="flex-1">
        {/* O Outlet mostra o conteúdo da rota atual */}
        <Outlet />
      </main>

      {/* Rodapé do site */}
      <Footer />
    </div>
  );
}
