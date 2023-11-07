import { automovel } from "../models/Automovel.js";
import AutomovelService from "../services/AutomovelService.js";

class AutomovelController {
  static async cadastrarAutomovel(req, res) {
    try {
      const automovelData = req.body;
      const automovelCriado = await AutomovelService.cadastrarAutomovel(automovelData);
      res.status(201).json({ message: "Cadastro do automóvel efetuado com sucesso", Automovel: automovelCriado });
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }

  static async atualizarAutomovel(req, res) {
    try {
      const id = req.params.id;
      const automovelData = req.body;
      const automovelAtualizado = await AutomovelService.atualizarAutomovel(id, automovelData);
      res.status(200).json({ message: "Automóvel atualizado com sucesso", Automovel: automovelAtualizado });
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }

  static async excluirAutomovel(req, res) {
    try {
      const id = req.params.id;
      await AutomovelService.excluirAutomovel(id);
      res.status(200).json({ message: "Automóvel excluído com sucesso" });
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }

  static async listarTodosAutomoveis(req, res) {
    try {
      const listaAutomovel = await AutomovelService.listarTodosAutomoveis();
      res.status(200).json(listaAutomovel);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message}` });
    }
  }

  static async listarAutomovelPorId(req, res) {
    try {
      const automovelEncontrado = await AutomovelService.listarAutomovelPorId(req.params.id);
      res.status(200).json(automovelEncontrado);
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }

  static async listarAutomoveisPorCor(req, res) {
    try {
      const automovelPorCor = await AutomovelService.listarAutomoveisPorCor(req.query.cor);
      res.status(200).json(automovelPorCor);
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }

  static async listarAutomoveisPorMarca(req, res) {
    try {
      const automovelPorMarca = await AutomovelService.listarAutomoveisPorMarca(req.query.marca);
      res.status(200).json(automovelPorMarca);
    } catch (erro) {
      res.status(400).json({ message: `${erro.message}` });
    }
  }
}

export default AutomovelController;