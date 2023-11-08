import { automovel as automovelModel } from "../models/Automovel.js";
import { motorista as motoristaModel } from "../models/Motorista.js";
import { aluguel as aluguelModel } from "../models/Aluguel.js";

class AluguelService {
    static async criarRegistroDeUtilizacao(aluguelData) {
    const { automovel, motorista, motivoUtilizacao } = aluguelData;
    const automovelEncontrado = await automovelModel.findById(automovel);
    const motoristaEncontrado = await motoristaModel.findById(motorista);
    try {
      const automovelEmUso = await aluguelModel.findOne({ automovel: automovelEncontrado, dataFinal: null });
      if (automovelEmUso) {
        throw new Error("Automóvel em uso, registro não permitido.");
      }
      const motoristaEmUso = await aluguelModel.findOne({ motorista: motoristaEncontrado, dataFinal: null });
      if (motoristaEmUso) {
        throw new Error("Motorista utilizando veículo XXX(perguntar), não sendo permitido alugar 2º veiculo para este condutor .");
      }
      
      const registroDeUtilizacao = await aluguelModel.create({ automovel: automovelEncontrado, motorista: motoristaEncontrado, motivoUtilizacao});
      return registroDeUtilizacao;
    } catch (erro) {
      throw new Error(`Falha ao criar registro de utilização: ${erro.message}`);
    }
  }

  static async finalizarRegistroDeUtilizacao(id) {
    try {
      const aluguel = await aluguelModel.findById(id);
      if (!aluguel) {
        throw new Error("Registro de utilização não encontrado.");
      }
      if (aluguel.dataFinal) {
        throw new Error("Registro de utilização finalizado.");
      }
      aluguel.dataFinal = new Date();
      await aluguel.save();
      return aluguel;
    } catch (erro) {
      throw new Error(`Falha ao finalizar registro de utilização: ${erro.message}`);
    }
  }

  static async listarRegistrosDeUtilizacao() {
    try {
      const registrosDeUtilizacao = await aluguelModel.find({})
        .populate('motorista', 'nome')
        .populate('automovel', 'cor marca placa')
        .exec();
      return registrosDeUtilizacao;
    } catch (erro) {
      throw new Error(`Falha ao listar registros de utilização: ${erro.message}`);
    }
  }

}
  export default AluguelService;