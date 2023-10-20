import mongoose from "mongoose";
import { motoristaSchema } from "./Motorista.js";

const automovelSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    placa: { type: String, required: true },
    cor: { type: String, required: true },
    marca: { type: String, required: true },
    motorista: motoristaSchema
}, { versionKey: false });

const automovel = mongoose.model("automovel", automovelSchema);

export default automovel;