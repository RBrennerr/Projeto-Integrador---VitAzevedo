import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

// Componente usado para proteger rotas que precisam de login
export function RequireAuth({ children }: { children: ReactNode }) {

  // Pega a rota atual (onde o usuário estava)
  const location = useLocation();

  // Verifica se o usuário está autenticado usando o localStorage
  const isAuthenticated = localStorage.getItem("auth") === "true";

  // Se o usuário NÃO estiver logado
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"          // redireciona para a página de login
        replace             // evita que o usuário volte para a página protegida
        state={{ from: location }} // salva a rota original para possível retorno
      />
    );
  }

  // Se estiver logado, permite acessar o conteúdo da rota
  return children;
}
