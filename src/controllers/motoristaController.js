import MotoristaService from "../services/MotoristaService.js";

class MotoristaController {
  static async cadastrarMotorista(req, res) {
    try {
      const motoristaData = req.body;
      const motoristaCriado = await MotoristaService.cadastrarMotorista(motoristaData);
      res.status(201).json({ message: "Cadastro do motorista efetuado com sucesso", Motorista: motoristaCriado });
    } catch (erro) { res.status(400).json({ message: `${erro.message}` }); }
  }

  static async atualizarMotorista(req, res) {
    try {
      const id = req.params.id;
      const motoristaData = req.body;
      const motoristaAtualizado = await MotoristaService.atualizarMotorista(id, motoristaData);
      res.status(200).json({ message: "Motorista atualizado com sucesso", Motorista: motoristaAtualizado });
    } catch (erro) { res.status(400).json({ message: `${erro.message}` }); }
  }

  static async excluirMotorista(req, res) {
    try {
      const id = req.params.id;
      await MotoristaService.excluirMotorista(id);
      res.status(200).json({ message: "Motorista excluído com sucesso" });
    } catch (erro) { res.status(400).json({ message: `${erro.message}` }); }
  }

  static async listarMotoristaPorId(req, res) {
    try {
      const motoristaEncontrado = await MotoristaService.listarMotoristaPorId(req.params.id);
      res.status(200).json(motoristaEncontrado);
    } catch (erro) { res.status(400).json({ message: `${erro.message}` }); }
  }
  
  static async listarMotoristaPorNome(req, res) {
    try {
      const motoristaPorNome = await MotoristaService.listarMotoristaPorNome(req.query.nome);
      res.status(200).json(motoristaPorNome);
    } catch (erro) { res.status(400).json({ message: `${erro.message}` }); }
  }
  
  static async listarMotoristas(req, res) {
    try {
      const listaMotorista = await MotoristaService.listarMotoristas();
      res.status(200).json(listaMotorista);
    } catch (erro) { res.status(500).json({ message: `${erro.message}` }); }
  }
}

export default MotoristaController;