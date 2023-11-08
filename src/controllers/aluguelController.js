import AluguelService from "../services/AluguelService.js";

class AluguelController {
  static async criarRegistroDeUtilizacao(req, res) {
    const aluguelData = req.body;
    try {
      const registroDeUtilizacao = await AluguelService.criarRegistroDeUtilizacao(aluguelData);
      res.status(201).json({ message: "Registro de utilização criado com sucesso", registroDeUtilizacao });
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao criar registro de utilização` }); }
  }

  static async finalizarRegistroDeUtilizacao(req, res) {
    const id = req.params.id;
    try {
      const registroDeUtilizacao = await AluguelService.finalizarRegistroDeUtilizacao(id);
      res.status(200).json({ message: "Registro de utilização finalizado com sucesso", registroDeUtilizacao });
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao finalizar registro de utilização` }); }
  }

  static async listarRegistrosDeUtilizacao(req, res) {
    try {
      const registrosDeUtilizacao = await AluguelService.listarRegistrosDeUtilizacao();
      res.status(200).json(registrosDeUtilizacao);
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao listar registros de utilização` }); }
  }
}

export default AluguelController;
