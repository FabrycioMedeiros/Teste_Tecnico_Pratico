import express from "express";
import AutomovelController from "../controllers/automovelController.js";

const routes = express.Router();

routes.get("/automovel", AutomovelController.listarAutomoveis);
routes.get("/automovel/busca-cor", AutomovelController.listarAutomoveisPorCor);
routes.get("/automovel/busca-marca", AutomovelController.listarAutomoveisPorMarca);
routes.get("/automovel/:id", AutomovelController.listarAutomoveisPorId);
routes.post("/automovel", AutomovelController.cadastrarAutomoveis);
routes.put("/automovel/:id", AutomovelController.atualizarAutomoveis);
routes.delete("/automovel/:id", AutomovelController.excluirAutomoveis);

export default routes;
