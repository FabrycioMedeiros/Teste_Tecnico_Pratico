import { automovel } from "../models/Automovel.js";

class AutomovelController {

     static async cadastrarAutomovel (req, res) {
      try {
        const automovelCriado = await automovel.create(req.body);
        res.status(201).json({ message: "Cadastro do automóvel efetuado com sucesso", Automovel: automovelCriado });
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha no cadastro do automóvel` }) }
    };

    static async atualizarAutomovel (req, res) {
      try {
        const id = req.params.id;
        await automovel.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Automóvel atualizado com sucesso"});
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na atualização do automóvel` }); }
    };

    static async excluirAutomovel (req, res) {
      try {
        const id = req.params.id;
        await automovel.findByIdAndDelete(id, req.body);
        res.status(200).json({ message: "Automóvel excluido com sucesso"});
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na exclusão do automóvel` }); }
    };

    static async listarTodosAutomoveis (req, res) {
      try {
        const listaAutomovel = await automovel.find({});
        res.status(200).json(listaAutomovel);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na listagem dos automóveis` }); }
    };

    static async listarAutomovelPorId (req, res) {
      try {
        const automovelEncontrado = await automovel.findById(req.params.id);
        res.status(200).json(automovelEncontrado);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na busca do automóvel por Id` }); }
    };

    static async listarAutomoveisPorCor (req, res) {
      try {
        const automovelPorCor = await automovel.find({ cor: req.query.cor});
        res.status(200).json(automovelPorCor);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na listagem dos automóveis por cor` }); }
    };

    static async listarAutomoveisPorMarca (req, res) {
      try {
        const automovelPorMarca = await automovel.find({ marca: req.query.marca });
        res.status(200).json(automovelPorMarca);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na listagem dos automóveis por marca` }); }
    };
};

export default AutomovelController;