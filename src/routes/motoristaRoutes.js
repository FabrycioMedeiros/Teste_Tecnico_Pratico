import express from "express";
import MotoristaController from "../controllers/motoristaController.js";

const routes = express.Router();

routes.post("/api/motorista", MotoristaController.cadastrarMotorista);
routes.put("/api/motorista/:id", MotoristaController.atualizarMotorista);
routes.delete("/api/motorista/:id", MotoristaController.excluirMotorista);
routes.get("/api/motorista/:id", MotoristaController.listarMotoristaPorId);
routes.get("/api/motorista/busca/nome", MotoristaController.listarMotoristaPorNome);
routes.get("/api/motorista", MotoristaController.listarMotoristas);

export default routes;
