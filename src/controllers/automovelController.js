import automovel from "../models/Automovel.js";
import { motorista } from "../models/Motorista.js"

class AutomovelController {

    static async listarAutomoveis (req, res) {
      try {
        const listaAutomovel = await automovel.find({});
        res.status(200).json(listaAutomovel);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
    };

    static async listarAutomoveisPorId (req, res) {
      try {
        const id = req.params.id;
        const automovelEncontrado = await automovel.findById(id);
        res.status(200).json(automovelEncontrado);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição do veiculo` });
      }
    };

    static async cadastrarAutomoveis (req, res) {
      const novoAutomovel = req.body;

      try {
        const motoristaEncontrado = await motorista.findById(novoAutomovel.motorista);
        const cadastroCompleto = { ...novoAutomovel, motorista: { ... motoristaEncontrado._doc }};
        const automovelCriado = await automovel.create(cadastroCompleto);
        res.status(201).json({ message: "Cadastrado com sucesso", Automovel: novoAutomovel });
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar veiculo` })
      }
    };

    static async atualizarAutomoveis (req, res) {
      try {
        const id = req.params.id;
        await automovel.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Veiculo atualizado"});
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na atualização do veiculo` });
      }
    };

    static async excluirAutomoveis (req, res) {
      try {
        const id = req.params.id;
        await automovel.findByIdAndDelete(id, req.body);
        res.status(200).json({ message: "Veiculo excluido com sucesso"});
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
      }
    };

    static async listarAutomoveisPorCor (req, res) {
      const cor = req.query.cor;
      try {
        const automovelPorCor = await automovel.find({ cor: cor});
        res.status(200).json(automovelPorCor);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na solicitação` });
      }
    };

    static async listarAutomoveisPorMarca (req, res) {
      const marca = req.query.marca;
      try {
        const automovelPorMarca = await automovel.find({ marca: marca });
        res.status(200).json(automovelPorMarca);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na solicitação` });
      }
    };


};

export default AutomovelController;