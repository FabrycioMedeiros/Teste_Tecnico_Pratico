import { automovel } from "../models/Automovel.js";

class AutomovelService {
  static async validarAutomovel(automovelData) {
    if (!automovelData.placa) {
      throw new Error("Placa é um campo obrigatório.");
    }

    if (!automovelData.cor) {
      throw new Error("Cor é um campo obrigatório.");
    }

    if (!automovelData.marca) {
      throw new Error("Marca é um campo obrigatório.");
    }

    return automovelData;
  }

  static async cadastrarAutomovel(automovelData) {
    try {
      const automovelValidado = await this.validarAutomovel(automovelData);
      const automovelCriado = await automovel.create(automovelValidado);
      return automovelCriado;
    } catch (erro) {
      throw new Error(`Falha no cadastro do automóvel: ${erro.message}`);
    }
  }

  static async atualizarAutomovel(id, automovelData) {
    try {
      const automovelValidado = await this.validarAutomovel(automovelData);
      const automovelAtualizado = await automovel.findByIdAndUpdate(id, automovelValidado, { new: true });

      if (automovelAtualizado) {
        return automovelAtualizado;
      } else {
        throw new Error("Automóvel não encontrado");
      }
    } catch (erro) {
      throw new Error(`Falha na atualização do automóvel: ${erro.message}`);
    }
  }

  static async excluirAutomovel(id) {
    await automovel.findByIdAndDelete(id);
  }

  static async listarTodosAutomoveis() {
    return await automovel.find({});
  }

  static async listarAutomovelPorId(id) {
    return await automovel.findById(id);
  }

  static async listarAutomoveisPorCor(cor) {
    return await automovel.find({ cor });
  }

  static async listarAutomoveisPorMarca(marca) {
    return await automovel.find({ marca });
  }
}

export default AutomovelService;