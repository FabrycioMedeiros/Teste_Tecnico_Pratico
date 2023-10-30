import express from "express";
import AutomovelController from "../controllers/automovelController.js";

const routes = express.Router();

routes.get("/api/automovel", AutomovelController.listarAutomoveis);
routes.get("/api/automovel/busca-cor", AutomovelController.listarAutomoveisPorCor);
routes.get("/api/automovel/busca-marca", AutomovelController.listarAutomoveisPorMarca);
routes.get("/api/automovel/:id", AutomovelController.listarAutomoveisPorId);
routes.post("/api/automovel", AutomovelController.cadastrarAutomoveis);
routes.put("/api/automovel/:id", AutomovelController.atualizarAutomoveis);
routes.delete("/api/automovel/:id", AutomovelController.excluirAutomoveis);

export default routes;
