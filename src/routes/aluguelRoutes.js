import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const routes = express.Router();

routes.post("/api/aluguel", AluguelController.criarRegistroDeUtilizacao);
routes.get("/api/aluguel", AluguelController.listarRegistrosDeUtilizacao);
routes.put("/api/aluguel/:id", AluguelController.finalizarRegistroDeUtilizacao);

export default routes;