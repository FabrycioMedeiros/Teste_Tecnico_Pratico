import express from "express";
import AutomovelController from "../controllers/automovelController.js";

const routes = express.Router();

routes.post("/api/automovel", AutomovelController.cadastrarAutomovel);
routes.put("/api/automovel/:id", AutomovelController.atualizarAutomovel);
routes.delete("/api/automovel/:id", AutomovelController.excluirAutomovel);
routes.get("/api/automovel", AutomovelController.listarTodosAutomoveis);
routes.get("/api/automovel/:id", AutomovelController.listarAutomovelPorId);
routes.get("/api/automovel/busca/cor", AutomovelController.listarAutomoveisPorCor);
routes.get("/api/automovel/busca/marca", AutomovelController.listarAutomoveisPorMarca);

export default routes;
