import mongoose from "mongoose";

const motoristaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true }
}, { versionKey: false });

const motorista = mongoose.model("motoristas", motoristaSchema);
export { motorista, motoristaSchema };