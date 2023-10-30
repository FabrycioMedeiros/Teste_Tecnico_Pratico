import { automovel as automovelModel } from "../models/Automovel.js";
import { motorista as motoristaModel } from "../models/Motorista.js";
import { aluguel } from "../models/Aluguel.js";

class AluguelController {

  static async criarRegistroDeUtilizacao(req, res) {
    const novoRegistro = req.body;
    try {
      const automovel = await automovelModel.findById(novoRegistro.automovel);
      if (!automovel) {throw new Error("Automovel não encontrado.")};
      const motorista = await motoristaModel.findById(novoRegistro.motorista);
      if (!motorista) {throw new Error("Motorista não encontrado.")};
      console.log(automovel)
      const registroDeUtilizacao = await aluguel.create({...novoRegistro, automovel, motorista});
      res.status(201).json({ message: "Registro de utilização criado com sucesso", registroDeUtilizacao });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao criar registro de utilização` });
    }
  }

  static async finalizarRegistroDeUtilizacao(req, res) {
    const id = req.params.id;
    try {
      const registroDeUtilizacao = await aluguel.findByIdAndUpdate(id, req.body);
      res.status(201).json({ message: "Registro de utilização finalizado com sucesso", registroDeUtilizacao });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao finalizar registro de utilização` });
    }
  }

  static async listarRegistrosDeUtilizacao(req, res) {
    try {
      const registrosDeUtilizacao = await aluguel.find({})
        .populate('motorista', 'nome')
        .populate('automovel', 'cor', 'marca')
        .exec();
      res.status(200).json(registrosDeUtilizacao);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao listar registros de utilização` });
    }
  }
}

export default AluguelController;
