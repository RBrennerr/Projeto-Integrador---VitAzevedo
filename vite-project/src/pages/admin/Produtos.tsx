import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  imagem?: string;
  ativo: boolean;
};

export default function AdminProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  // Campos do formulário
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  // Modal aberto ou fechado
  const [modalAberto, setModalAberto] = useState(false);

  // Carrega produtos ao abrir a página
  useEffect(() => {
    fetch("http://localhost:3333/produtos")
      .then(r => r.json())
      .then(setProdutos)
      .finally(() => setLoading(false));
  }, []);

  // Adiciona novo produto
  async function adicionarProduto() {
    if (!nome || !preco || !imagem) return alert("Preencha nome, preço e imagem!");
    const form = new FormData();
    form.append("nome", nome);
    form.append("preco", preco);
    form.append("descricao", descricao);
    form.append("imagem", imagem);
    form.append("ativo", "true");
    const res = await fetch("http://localhost:3333/produtos", { method: "POST", body: form });
    const novo = await res.json();
    setProdutos(p => [...p, novo]);
    setNome(""); setPreco(""); setDescricao(""); setImagem(null);
    setModalAberto(false);
  }

  // Salva mudanças no produto
  async function editarProduto(p: Produto) {
    await fetch(`http://localhost:3333/produtos/${p.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: p.nome, preco: p.preco, descricao: p.descricao }),
    });
  }

  // Alterna visibilidade do produto
  async function toggleAtivo(p: Produto) {
    await fetch(`http://localhost:3333/produtos/${p.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ativo: !p.ativo }),
    });
    setProdutos(list => list.map(x => x.id === p.id ? { ...x, ativo: !x.ativo } : x));
  }

  // Deleta produto
  async function excluirProduto(id: number) {
    if (!confirm("Tem certeza?")) return;
    await fetch(`http://localhost:3333/produtos/${id}`, { method: "DELETE" });
    setProdutos(p => p.filter(x => x.id !== id));
  }

  if (loading) return <p className="text-white text-center mt-10">Carregando produtos...</p>;

  // Função simples para atualizar campos de um produto
  function atualizarProduto(id: number, campo: keyof Produto, valor: any) {
    setProdutos(list => list.map(p => p.id === id ? { ...p, [campo]: valor } : p));
  }

  return (
    <div className="p-6 bg-[#0f0f1a] min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">Gerenciar Produtos</h1>

      {/* Botão abrir modal */}
      <div className="mb-6 text-center">
        <button onClick={() => setModalAberto(true)} className="auth-btn px-6 py-2 bg-[#9E83B8] hover:bg-[#9E83B8]-700 rounded">
          + Adicionar Produto
        </button>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#0f0f1a] p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-4">Adicionar Produto</h2>
            <div className="flex flex-col gap-3">
              <input className="auth-input" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
              <input className="auth-input" type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
              <input className="auth-input" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
              <input type="file" accept="image/*" onChange={e => setImagem(e.target.files?.[0] || null)} className="text-sm" />
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={adicionarProduto} className="auth-btn px-4 bg-[#9E83B8] hover:bg-[#9E83B8]-700 flex-1">Adicionar</button>
              <button onClick={() => setModalAberto(false)} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded flex-1">Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de produtos */}
      <h2 className="text-2xl mb-4">Produtos Cadastrados</h2>
      {produtos.length === 0 ? (
        <p className="text-gray-400 text-center">Nenhum produto ainda!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map(p => (
            <div key={p.id} className="bg-black/20 rounded-lg overflow-hidden shadow-md flex flex-col">
              {p.imagem ? (
                <img src={p.imagem} alt={p.nome} className="w-full h-32 object-cover" />
              ) : (
                <div className="w-full h-32 bg-gray-600 flex items-center justify-center text-gray-400 text-sm">Sem Imagem</div>
              )}
              <div className="p-3 flex flex-col gap-2">
                {/* Inputs usam função única para atualizar */}
                <input className="auth-input text-sm" placeholder="Nome" value={p.nome} onChange={e => atualizarProduto(p.id, "nome", e.target.value)} />
                <input className="auth-input text-sm" type="number" placeholder="Preço" value={p.preco} onChange={e => atualizarProduto(p.id, "preco", Number(e.target.value))} />
                <input className="auth-input text-sm" placeholder="Descrição" value={p.descricao || ""} onChange={e => atualizarProduto(p.id, "descricao", e.target.value)} />
                <p className={`text-sm ${p.ativo ? "text-green-400" : "text-red-400"}`}>{p.ativo ? "Visível" : "Oculto"}</p>
                <div className="flex gap-1 mt-2">
                  <button onClick={() => editarProduto(p)} className="auth-btn px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 flex-1">Salvar</button>
                  <button onClick={() => toggleAtivo(p)} className="px-2 py-1 text-xs text-indigo-400 border border-indigo-400 rounded hover:bg-indigo-400 hover:text-white flex-1">{p.ativo ? "Ocultar" : "Mostrar"}</button>
                  <button onClick={() => excluirProduto(p.id)} className="px-2 py-1 text-xs text-red-400 border border-red-400 rounded hover:bg-red-400 hover:text-white flex-1">Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
