import express from "express";
import MotoristaController from "../controllers/motoristaController.js";

const routes = express.Router();

routes.get("/api/motorista", MotoristaController.listarMotoristas);
routes.get("/api/motorista/busca", MotoristaController.listarMotoristaPorNome);
routes.get("/api/motorista/:id", MotoristaController.listarMotoristaPorId);
routes.post("/api/motorista", MotoristaController.cadastrarMotoristas);
routes.put("/api/motorista/:id", MotoristaController.atualizarMotoristas);
routes.delete("/api/motorista/:id", MotoristaController.excluirMotorista);

export default routes;
