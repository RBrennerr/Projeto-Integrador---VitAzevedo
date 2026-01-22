import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AdminLayout } from "../components/AdminLayout";

// Páginas do site principal
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Portfolio from "../pages/Portfolio";
import Loja from "../pages/Loja";
import Carrinho from "../pages/Carrinho";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

// Páginas da área administrativa
import AdminHome from "../pages/admin/AdminHome";
import Produtos from "../pages/admin/Produtos";
import Pedidos from "../pages/admin/Pedidos";

// Componente responsável por controlar todas as rotas da aplicação
export function AppRoutes() {
  return (
    <Routes>

      {/* ROTAS DO SITE */}
      {/* Layout padrão que envolve todas as páginas públicas */}
      <Route element={<Layout />}>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página sobre a artista */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Página de portfólio */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Página da loja */}
        <Route path="/loja" element={<Loja />} />

        {/* Página do carrinho */}
        <Route path="/carrinho" element={<Carrinho />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>

      {/* ROTAS DO ADMIN */}
      {/* Layout exclusivo da área administrativa */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Página inicial do painel admin */}
        <Route index element={<AdminHome />} />

        {/* Página para gerenciar produtos */}
        <Route path="produtos" element={<Produtos />} />

        {/* Página para visualizar pedidos */}
        <Route path="pedidos" element={<Pedidos />} />
      </Route>

    </Routes>
  );
}
