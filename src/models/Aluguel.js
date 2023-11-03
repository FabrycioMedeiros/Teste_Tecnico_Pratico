import mongoose from "mongoose";
import { motoristaSchema } from "./Motorista.js";
import { automovelSchema } from  "./Automovel.js";

const aluguelSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    dataInicio: { type: Date, default: Date.now },
    dataFinal: { type: Date },
    motorista: motoristaSchema,
    automovel: automovelSchema,
    motivoUtilizacao: { type: String, required: true },
}, { versionKey: false });

const aluguel = mongoose.model("aluguel", aluguelSchema);
export { aluguel, aluguelSchema };