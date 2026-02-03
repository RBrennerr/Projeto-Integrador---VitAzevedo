import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import decor1 from "../assets/Fotos/BG.png";

export function AdminLayout() {
  return (
    // Fundo com imagem igual ao login
    <div
      className="relative min-h-[100svh] bg-cover bg-center"
      style={{ backgroundImage: `url(${decor1})` }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Container geral do admin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // animação simples
        animate={{ opacity: 1, y: 0 }}
        className="relative flex min-h-[100svh]"
      >
        {/* Aba lateral  */}
        <aside className="w-[220px] bg-black/50 backdrop-blur-md text-white p-6">
          <h2 className="text-xl font-semibold mb-6">Admin</h2>
          <nav>
            <ul className="flex flex-col gap-3">
              <li><Link to="/admin" className="hover:text-purple-300">Dashboard</Link></li>
              <li><Link to="/admin/produtos" className="hover:text-purple-300">Produtos</Link></li>
              <li><Link to="/admin/pedidos" className="hover:text-purple-300">Pedidos</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Área de conteúdo */}
        <main className="flex-1 p-8 text-white">
          {/* Aqui entram AdminHome, Produtos, Pedidos etc */}
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
}
