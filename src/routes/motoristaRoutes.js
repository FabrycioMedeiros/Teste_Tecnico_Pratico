import express from "express";
import MotoristaController from "../controllers/motoristaController.js";

const routes = express.Router();

routes.get("/motorista", MotoristaController.listarMotoristas);
routes.get("/motorista/busca", MotoristaController.listarMotoristaPorNome);
routes.get("/motorista/:id", MotoristaController.listarMotoristaPorId);
routes.post("/motorista", MotoristaController.cadastrarMotoristas);
routes.put("/motorista/:id", MotoristaController.atualizarMotoristas);
routes.delete("/motorista/:id", MotoristaController.excluirMotorista);

export default routes;
