import { motorista } from "../models/Motorista.js";

class MotoristaController {

    static async listarMotoristas (req, res) {
      try {
        const listaMotorista = await motorista.find({});
        res.status(200).json(listaMotorista);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
    };

    static async listarMotoristaPorId (req, res) {
      try {
        const id = req.params.id;
        const motoristaEncontrado = await motorista.findById(id);
        res.status(200).json(motoristaEncontrado);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição do motorista` });
      }
    };

    static async cadastrarMotoristas (req, res) {
      try {
        const novoMotorista = await motorista.create(req.body);
        res.status(201).json({ message: "Cadastrado com sucesso", Motorista: novoMotorista });
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar motorista` })
      }
    };

    static async atualizarMotoristas (req, res) {
      try {
        const id = req.params.id;
        await motorista.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Motorista atualizado"});
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na atualização do motorista` });
      }
    };

    static async excluirMotorista (req, res) {
      try {
        const id = req.params.id;
        await motorista.findByIdAndDelete(id, req.body);
        res.status(200).json({ message: "Motorista excluido com sucesso"});
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
      }
    };

    static async listarMotoristaPorNome (req, res) {
      const nome = req.query.nome;
      try {
        const motoristaPorNome = await motorista.find({ nome: nome });
        res.status(200).json(motoristaPorNome);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na solicitação` });
      }
    };
};

export default MotoristaController;