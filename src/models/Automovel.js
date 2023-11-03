import mongoose from "mongoose";

const automovelSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    placa: { type: String, required: true },
    cor: { type: String, required: true },
    marca: { type: String, required: true }
}, { versionKey: false });

const automovel = mongoose.model("automovel", automovelSchema);
export { automovel, automovelSchema };