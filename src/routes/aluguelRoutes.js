import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const routes = express.Router();

routes.post("/api/aluguel", AluguelController.criarRegistroDeUtilizacao);
routes.put("/api/aluguel/:id", AluguelController.finalizarRegistroDeUtilizacao);
routes.get("/api/aluguel", AluguelController.listarRegistrosDeUtilizacao);

export default routes;