export type Produto = {
  imagem: string | undefined;
  id: number;
  nome: string;
  preco: number;
};
export interface ProdutoCarrinho extends Produto {
  quantidade: number;
}
