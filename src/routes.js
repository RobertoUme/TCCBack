const express = require("express");

const routes = express.Router();
const AdminController = require("./controllers/AdminController");
const ProfissionalController = require("./controllers/ProfissionalController");
const ServiceController = require("./controllers/ServiceController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/adm", AdminController.store); //cadastro de adm
routes.post("/sessions", SessionController.store); //cadastro de sessão
routes.post("/service", ServiceController.store); //cadastro de serviço
routes.post("/profissional", ProfissionalController.store); //cadastro de prof

routes.get("/service", ServiceController.all); //listar serviços ocultados
routes.get("/allservice", ServiceController.index);//listar serviços não ocultados
routes.get("/profissional", ProfissionalController.list); //listar todos os profissionais

routes.get("/profissionalnv", ProfissionalController.invalidos); //listar profissionais não validados
routes.get("/profissionalv", ProfissionalController.validados); //listar profissionais validados

routes.put("/service/:id", ServiceController.update); //atualizar
routes.put("/profissional/:id", ProfissionalController.update); //atualizar

routes.delete("/profissional/:id", ProfissionalController.destroy)
routes.delete("/service/:id", ServiceController.destroy)


routes.get("/adm", AdminController.list);
routes.get("teste", (req, res) => res.json({ ok: true }));
routes.use(authMiddleware);
module.exports = routes;
