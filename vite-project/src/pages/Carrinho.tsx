import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

// Página do carrinho de compras
export default function Carrinho() {
  // Pega os itens do carrinho e a função para alterar quantidade
  const { items, updateQtd } = useCartStore();
  const navigate = useNavigate();

  // Simula se o usuário está logado ou não
  const logado = false;

  // Calcula o total do carrinho somando preço * quantidade
  const total = items.reduce((acc, p) => acc + p.preco * p.quantidade, 0);

  // Se não tiver nenhum item no carrinho
  if (!items.length)
    return (
      <main className="bg-[#0f0f1a] min-h-screen text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-display">Carrinho</h1>
        <p>Seu carrinho está vazio.</p>

        {/* Botão para voltar para a loja */}
        <button
          onClick={() => navigate("/loja")}
          className="bg-[#C9A0DC] text-[#0f0f1a] py-2 px-6 rounded-full"
        >
          Voltar para a loja
        </button>
      </main>
    );

  return (
    <main className="bg-[#0f0f1a] min-h-screen text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-5xl mb-12 font-display">Carrinho</h1>

      {/* Lista de produtos adicionados no carrinho */}
      <ul className="space-y-4">
        {items.map(({ id, nome, preco, quantidade, imagem }) => (
          <li
            key={id}
            className="bg-black/40 rounded-lg p-4 flex justify-between items-center"
          >
            {/* Imagem e informações do produto */}
            <div className="flex items-center gap-4">
              <img
                src={imagem} // imagem do produto
                alt={nome}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div>
                <h2 className="text-xl">{nome}</h2>
                <p>
                  R$ {preco.toFixed(2)} x {quantidade} ={" "}
                  {(preco * quantidade).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Botões para alterar quantidade */}
            <div className="flex gap-2 items-center">
              <button
                onClick={() => updateQtd(id, -1)} // diminui 1 unidade
                className="bg-gray-600 px-3 rounded-full"
              >
                -
              </button>

              <span>{quantidade}</span>

              <button
                onClick={() => updateQtd(id, 1)} // aumenta 1 unidade
                className="bg-gray-600 px-3 rounded-full"
              >
                +
              </button>

              <button
                onClick={() => updateQtd(id, -quantidade)} // remove o item
                className="bg-red-600 px-3 rounded-full"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total do carrinho e botão de compra */}
      <div className="mt-8 flex justify-between items-center">
        <span className="text-2xl font-semibold">
          Total: R$ {total.toFixed(2)}
        </span>

        <button
          onClick={() =>
            logado
              ? navigate("/checkout")
              : alert("Faça login para finalizar a compra!")
          }
          className="bg-green-600 hover:bg-green-700 py-2 px-6 rounded-full"
        >
          Comprar Agora
        </button>
      </div>
    </main>
  );
}
