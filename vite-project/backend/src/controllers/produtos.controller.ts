import { prisma } from "../prisma/client";
import { Request, Response } from "express";

// listar produtos
export async function listar(req: Request, res: Response) {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
}

// criar produto
export async function criar(req: Request, res: Response) {
  const { nome, preco } = req.body;

  const produto = await prisma.produto.create({
    data: { nome, preco },
  });

  res.status(201).json(produto);
}

// atualizar preço / quantidade
export async function atualizar(req: Request, res: Response) {
  const { id } = req.params;
  const { preco, quantidade } = req.body;

  const produto = await prisma.produto.update({
    where: { id: Number(id) },
    data: { preco, quantidade },
  });

  res.json(produto);
}

// deletar produto
export async function remover(req: Request, res: Response) {
  const { id } = req.params;

  await prisma.produto.delete({
    where: { id: Number(id) },
  });

  res.status(204).send();
}
