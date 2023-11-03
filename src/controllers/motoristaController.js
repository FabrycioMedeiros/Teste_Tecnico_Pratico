import { motorista } from "../models/Motorista.js";

class MotoristaController {

    static async cadastrarMotorista (req, res) {
      try {
        const novoMotorista = await motorista.create(req.body);
        res.status(201).json({ message: "Cadastro de motorista com sucesso", Motorista: novoMotorista });
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha ao cadastrar motorista` }); }
    };

    static async atualizarMotorista (req, res) {
      try {
        const id = req.params.id;
        await motorista.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Motorista atualizado com sucesso"});
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na atualização do motorista` }); }
    };

    static async excluirMotorista (req, res) {
      try {
        const id = req.params.id;
        await motorista.findByIdAndDelete(id, req.body);
        res.status(200).json({ message: "Motorista excluido com sucesso"});
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na exclusão do motorista` }); }
    };

    static async listarMotoristaPorId (req, res) {
      try {
        const id = req.params.id;
        const motoristaEncontrado = await motorista.findById(id);
        res.status(200).json(motoristaEncontrado);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na busca do motorista por id` }); }
    };

    static async listarMotoristaPorNome (req, res) {
      const nome = req.query.nome;
      try {
        const motoristaPorNome = await motorista.find({ nome: nome });
        res.status(200).json(motoristaPorNome);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na busca do motorista por nome` }); }
    };

    static async listarMotoristas (req, res) {
      try {
        const listaMotorista = await motorista.find({});
        res.status(200).json(listaMotorista);
      } catch (erro) { res.status(500).json({ message: `${erro.message} - Falha na busca do motoristas` }); }
    };
};

export default MotoristaController;