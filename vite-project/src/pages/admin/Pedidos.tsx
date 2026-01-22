import { useEffect, useState } from "react";

// Tipos para produtos e pedidos
type ItemPedido = { produtoId: number; nome: string; preco: number; quantidade: number };
type Pedido = { id: number; cliente: string; total: number; status: "PENDENTE" | "PAGO" | "ENVIADO"; itens: ItemPedido[] };

export default function Pedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  // Busca pedidos ao abrir a página
  useEffect(() => {
    fetch("http://localhost:3333/pedidos")
      .then(r => r.json())
      .then(setPedidos);
  }, []);

  // Atualiza status do pedido
  async function alterarStatus(id: number, status: Pedido["status"]) {
    await fetch(`http://localhost:3333/pedidos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    // Atualiza na tela sem recarregar
    setPedidos(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  }

  // Retorna cor do status
  function corStatus(status: Pedido["status"]) {
    if (status === "PENDENTE") return "text-yellow-400";
    if (status === "PAGO") return "text-blue-400";
    return "text-green-400";
  }

  return (
    <div className="p-6 bg-[#0f0f1a] min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">Pedidos</h1>

      {pedidos.length === 0 && <p className="text-gray-400 text-center">Nenhum pedido encontrado</p>}

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pedidos.map(p => (
          <div key={p.id} className="bg-black/20 p-4 rounded-lg shadow-md flex flex-col gap-2">
            <strong>Pedido #{p.id}</strong>
            <div>Cliente: {p.cliente}</div>
            <div className={corStatus(p.status)}>Status: {p.status}</div>
            <div>Total: R$ {p.total}</div>

            {/* Lista de itens */}
            <ul className="list-disc list-inside mt-2">
              {p.itens.map(item => (
                <li key={item.produtoId}>{item.nome} — {item.quantidade}x R$ {item.preco}</li>
              ))}
            </ul>

            {/* Botões de controle */}
            <div className="flex gap-2 mt-2">
              {p.status === "PENDENTE" && (
                <button
                  onClick={() => alterarStatus(p.id, "PAGO")}
                  className="auth-btn px-2 py-1 bg-blue-600 hover:bg-blue-700 flex-1 text-xs"
                >
                  Marcar como pago
                </button>
              )}
              {p.status === "PAGO" && (
                <button
                  onClick={() => alterarStatus(p.id, "ENVIADO")}
                  className="auth-btn px-2 py-1 bg-green-600 hover:bg-green-700 flex-1 text-xs"
                >
                  Marcar como enviado
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
