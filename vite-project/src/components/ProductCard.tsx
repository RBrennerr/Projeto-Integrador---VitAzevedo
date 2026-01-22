import { useCartStore } from "../store/cartStore";
import type { Produto } from "../types/Produto";

// Interface que define quais dados o produto precisa ter
interface ProductCardProps {
  produto: Produto;
}

// Componente responsável por mostrar um produto na loja
export default function ProductCard({ produto }: ProductCardProps) {

  // Pega a função de adicionar itens ao carrinho
  const addToCart = useCartStore((state) => state.addItem);

  // Função chamada quando o usuário clica no botão
  const handleAdicionar = () => {
    addToCart(produto); // adiciona o produto no carrinho
    alert(`Adicionado: ${produto.nome}`); // mostra um alerta simples
  };

  return (
    // Card visual do produto
    <div className="bg-black/40 rounded-lg p-6 flex flex-col">

      {/* IMAGEM DO PRODUTO */}
      <img
        src={produto.imagem}      // imagem do produto
        alt={produto.nome}        // texto alternativo da imagem
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Nome do produto */}
      <h2 className="text-2xl mb-2">{produto.nome}</h2>

      {/* Preço formatado */}
      <p className="mb-4">
        R$ {produto.preco.toFixed(2)}
      </p>

      {/* Botão para adicionar o produto ao carrinho */}
      <button
        onClick={handleAdicionar} // chama a função ao clicar
        className="mt-auto bg-white text-[#0f0f1a] rounded-full py-2 px-4 font-semibold hover:bg-gray-200 transition"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
