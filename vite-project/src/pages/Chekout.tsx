import { useState } from "react";
import { useCartStore } from "../store/cartStore";

// Tipo simples para os itens do carrinho
// Serve pra o TypeScript saber o que tem dentro de cada item
type ItemCarrinho = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

export default function Checkout() {
  // Pega os itens do carrinho pelo store
  const { items } = useCartStore();

  // Guarda o QR Code do PIX (começa vazio)
  const [qrCode, setQrCode] = useState<string | null>(null);

  // Controla o loading quando estiver gerando o PIX
  const [loading, setLoading] = useState<boolean>(false);

  // Calcula o total do carrinho somando preço x quantidade
  const total = items.reduce(
    (acc: number, p: ItemCarrinho) => acc + p.preco * p.quantidade,
    0
  );

  // Função que chama o backend para gerar o PIX
  async function gerarPix(): Promise<void> {
    // Ativa o loading
    setLoading(true);

    // Faz a requisição para o backend passando o valor total
    const res = await fetch("http://localhost:3333/pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total }),
    });

    // Converte a resposta para JSON
    const data: { qrCodeBase64: string } = await res.json();

    // Salva o QR Code retornado
    setQrCode(data.qrCodeBase64);

    // Desativa o loading
    setLoading(false);
  }

  return (
    <main className="bg-[#0f0f1a] min-h-screen text-white flex flex-col items-center py-12">
      {/* Título da página */}
      <h1 className="text-4xl mb-6 font-display">Checkout</h1>

      {/* Mostra o valor total da compra */}
      <p className="mb-6 text-xl">
        Total: <strong>R$ {total.toFixed(2)}</strong>
      </p>

      {/* Botão para gerar o PIX (só aparece se ainda não tiver QR Code) */}
      {!qrCode && (
        <button
          onClick={gerarPix}
          className="bg-green-600 px-6 py-3 rounded-full"
        >
          {loading ? "Gerando PIX..." : "Pagar com PIX"}
        </button>
      )}

      {/* Quando o QR Code existir, mostra ele na tela */}
      {qrCode && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <p>Escaneie o QR Code:</p>

          {/* Imagem do QR Code PIX */}
          <img src={`data:image/png;base64,${qrCode}`} alt="QR Code PIX" />
        </div>
      )}
    </main>
  );
}
