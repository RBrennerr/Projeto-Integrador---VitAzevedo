import { create } from "zustand";
import type { Produto, ProdutoCarrinho } from "../types/Produto";

interface CartState {
  items: ProdutoCarrinho[];
  addItem: (produto: Produto) => void;
  updateQtd: (id: number, delta: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [], // 👈 começa vazio

  addItem: (produto) =>
    set((state) => {
      const existente = state.items.find((p) => p.id === produto.id);

      if (existente) {
        return {
          items: state.items.map((p) =>
            p.id === produto.id
              ? { ...p, quantidade: p.quantidade + 1 }
              : p
          ),
        };
      }

      return {
        items: [...state.items, { ...produto, quantidade: 1 }],
      };
    }),

  updateQtd: (id, delta) =>
    set((state) => ({
      items: state.items
        .map((p) =>
          p.id === id ? { ...p, quantidade: p.quantidade + delta } : p
        )
        .filter((p) => p.quantidade > 0),
    })),

  clear: () => set({ items: [] }),
}));
