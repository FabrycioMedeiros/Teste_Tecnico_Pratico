import { automovel as automovelModel } from "../models/Automovel.js";
import { motorista as motoristaModel } from "../models/Motorista.js";
import { aluguel   as aluguelModel   } from "../models/Aluguel.js";

class AluguelController {

  static async criarRegistroDeUtilizacao(req, res) {
    const aluguel = req.body;
    try {
      const automovel = await automovelModel.findById(aluguel.automovel);
      if (!automovel) { throw new Error("Automóvel inexistente.") };
      const motorista = await motoristaModel.findById(aluguel.motorista);
      if (!motorista) { throw new Error("Motorista inexistente.") };

      const automovelEmUso = await aluguelModel.findOne({ automovel: automovel, dataFinal: null});
      if (automovelEmUso) { throw new Error("Este automóvel já está sendo utilizado e não pode ser alugado novamente."); }
      const motoristaEmUso = await aluguelModel.findOne({ motorista: motorista, dataFinal: null});
      if (motoristaEmUso) { throw new Error("Este motorista já está utilizando um veículo e não pode alugar outro."); }

      const registroDeUtilizacao = await aluguelModel.create({...aluguel, automovel, motorista});
      res.status(201).json({ message: "Registro de utilização criado com sucesso", registroDeUtilizacao });
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao criar registro de utilização` }); }
  };

  static async finalizarRegistroDeUtilizacao(req, res) {
    const id = req.params.id;
    try {
      const aluguel = await aluguelModel.findById(id, req.body);
      if (!aluguel) { throw new Error("Registro de utilização não encontrado."); }
      if (aluguel.dataFinal) { throw new Error("Este registro de utilização já foi finalizado."); }
      aluguel.dataFinal = new Date();
     
      await aluguelModel.save(aluguel);
      res.status(201).json({ message: "Registro de utilização finalizado com sucesso" });
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao finalizar registro de utilização` }); }
  };

  static async listarRegistrosDeUtilizacao(req, res) {
    try {
      const registroDeUtilizacao = await aluguelModel.find({})
        .populate('motorista', 'nome')
        .populate('automovel', 'cor', 'marca', 'placa')
        .exec();
      res.status(200).json(registroDeUtilizacao);
    } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao listar registros de utilização` }); }
  };
}

export default AluguelController;
