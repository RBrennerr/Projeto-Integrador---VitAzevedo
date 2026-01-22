import { Router } from "express";
import * as Produtos from "./controllers/produtos.controller";

export const routes = Router();

routes.get("/produtos", Produtos.listar);
routes.post("/produtos", Produtos.criar);
routes.put("/produtos/:id", Produtos.atualizar);
routes.delete("/produtos/:id", Produtos.remover);
