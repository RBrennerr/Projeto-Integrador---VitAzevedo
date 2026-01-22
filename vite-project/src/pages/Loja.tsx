import ProductCard from "../components/ProductCard";
import type { Produto } from "../types/Produto";
import foto32 from "../assets/Fotos/32.jpg";
import foto11 from "../assets/Fotos/46.jpg";
import foto12 from "../assets/Fotos/44.jpg";
import foto13 from "../assets/Fotos/42.jpg";
import foto14 from "../assets/Fotos/45.jpg";
import foto15 from "../assets/Fotos/40.jpg";

// Lista de produtos mockados (depois pode vir de uma API)
const produtosExemplo: Produto[] = [
  // Produtos originais
  { id: 1, nome: "Ilustração A", preco: 100, imagem: foto32 },
  { id: 2, nome: "Impressão B", preco: 100, imagem: foto11 },
  { id: 3, nome: "Ilustração C", preco: 120, imagem: foto12 },
  { id: 4, nome: "Ilustração D", preco: 130, imagem: foto13 },
  { id: 5, nome: "Ilustração E", preco: 140, imagem: foto14 },
  { id: 6, nome: "Ilustração F", preco: 110, imagem: foto15 },
];

// Página da loja
export default function Loja() {
  return (
    <main className="bg-[#0f0f1a] min-h-screen text-white px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl mb-12 font-display">Loja</h1>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {produtosExemplo.length > 0 ? (
          produtosExemplo.map((produto: Produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))
        ) : (
          <p>Carregando produtos... (integre com API aqui)</p>
        )}
      </div>
    </main>
  );
}
