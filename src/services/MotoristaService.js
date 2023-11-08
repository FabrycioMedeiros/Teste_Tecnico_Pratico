import { motorista } from "../models/Motorista.js";

class MotoristaService {
  static async validarMotorista(motoristaData) {
    if (!motoristaData.nome) { throw new Error("Nome é um campo obrigatório."); }

    return motoristaData;
  }

  static async cadastrarMotorista(motoristaData) {
    try {
      const motoristaValidado = await this.validarMotorista(motoristaData);
      const motoristaCriado = await motorista.create(motoristaValidado);
      return motoristaCriado;
    } catch (erro) { throw new Error(`Falha no cadastro do motorista: ${erro.message}`); }
  }

  static async atualizarMotorista(id, motoristaData) {
    try {
      const motoristaValidado = await this.validarMotorista(motoristaData);
      const motoristaAtualizado = await motorista.findByIdAndUpdate(id, motoristaValidado, { new: true });

      if (motoristaAtualizado) {
        return motoristaAtualizado;
      } else { throw new Error("Motorista não encontrado"); }
    } catch (erro) { throw new Error(`Falha na atualização do motorista: ${erro.message}`); }
  }

  static async excluirMotorista(id) {
    await motorista.findByIdAndDelete(id);
  }

  static async listarMotoristaPorId(id) {
    return await motorista.findById(id);
  }
  
  static async listarMotoristaPorNome(nome) {
    return await motorista.find({ nome });
  }

  static async listarMotoristas() {
    return await motorista.find({});
  }

}

export default MotoristaService;