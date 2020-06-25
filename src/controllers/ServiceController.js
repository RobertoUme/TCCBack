const Servico = require("../models/Servico");
const Profissional = require("../models/Profissional");
const { where } = require("../models/Profissional");
module.exports = {
  async store(req, res) {
    const servico = await Servico.create(req.body);
    return res.json(servico);
  },

  async index(req, res) {
    const servico = await Servico.find({ visualizacao: 1 }).populate(
      "profissional"
    );
    return res.json(servico);
  },

  async update(req, res) {
    const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(servico);
  },

  async all(req, res) {
    const servico = await Servico.find({}).populate(
      "profissional"
    );
    return res.json(servico);
  },
  async destroy(req, res) {
    await Servico.deleteOne({ _id: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  },
};
