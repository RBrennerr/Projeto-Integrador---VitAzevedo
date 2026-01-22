import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Tipo usado para organizar os dados que vêm da API
// Ajuda o TypeScript a saber o formato do retorno
type Resumo = {
  produtos: number;
  pedidos: number;
  pedidosPendentes: number;
};

export default function AdminHome() {
  // Guarda os dados do resumo do dashboard
  // Começa como null porque ainda não buscou os dados
  const [resumo, setResumo] = useState<Resumo | null>(null);

  // Executa quando a página carrega
  // Faz a requisição para o backend
  useEffect(() => {
    fetch("http://localhost:3333/admin/resumo")
      .then(res => res.json()) // converte a resposta para JSON
      .then(setResumo); // salva os dados no estado
  }, []);

  // Enquanto os dados não chegam, mostra uma mensagem simples
  if (!resumo)
    return <p className="text-white text-center mt-10">Carregando...</p>;

  return (
    <div className="p-6 bg-[#0f0f1a] min-h-screen text-white">
      {/* Título da página */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Dashboard</h1>

      {/* Cards com informações principais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card titulo="Produtos" valor={resumo.produtos} cor="bg-green-600" />
        <Card titulo="Pedidos" valor={resumo.pedidos} cor="bg-blue-600" />
        <Card
          titulo="Pendentes"
          valor={resumo.pedidosPendentes}
          cor="bg-yellow-600"
        />
      </div>

      {/* Links para outras páginas do admin */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm">
        <Link to="/admin/produtos" className="text-indigo-400 hover:underline">
          Gerenciar Produtos
        </Link>
        <Link to="/admin/pedidos" className="text-indigo-400 hover:underline">
          Ver Pedidos
        </Link>
      </div>
    </div>
  );
}

// Componente simples para mostrar um card
// Recebe título, valor e cor como props
function Card({
  titulo,
  valor,
  cor,
}: {
  titulo: string;
  valor: number;
  cor: string;
}) {
  return (
    <div
      className={`${cor} p-4 rounded-lg shadow-md flex flex-col items-center`}
    >
      <strong>{titulo}</strong>
      <span className="text-2xl font-bold mt-2">{valor}</span>
    </div>
  );
}
