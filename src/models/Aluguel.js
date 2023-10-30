import mongoose from "mongoose";
import { motoristaSchema } from "./Motorista.js";
import { automovelSchema } from  "./Automovel.js";

const aluguelSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    dataInicio: { type: Date, required: true },
    dataFinal: { type: Date },
    motivoUtilizacao: { type: String, required: true },
    automovel: automovelSchema,
    motorista: motoristaSchema
}, { versionKey: false });

const aluguel = mongoose.model("aluguel", aluguelSchema);

export { aluguel, aluguelSchema };