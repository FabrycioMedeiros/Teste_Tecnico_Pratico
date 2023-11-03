import express from "express";
import automovel from "./automovelRoutes.js";
import motorista from "./motoristaRoutes.js";
import aluguel from "./aluguelRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Teste Técnico Prático - WebAPI"));
    app.use(express.json(), automovel, motorista, aluguel);
};
export default routes;