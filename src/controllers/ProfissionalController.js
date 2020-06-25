const Profissional = require("../models/Profissional");
const Servico = require("../models/Servico");
module.exports = {
  async store(req, res) {
    if (await Profissional.findOne({ crp: req.body.crp })) {
      return res.status(400).json({ error: "Esse CRP já foi cadastrado" });
    }
    const profissional = await Profissional.create(req.body);
    return res.json(profissional);
  },
  async list(req, res) {
    const profissional = await Profissional.find({});
    return res.json(profissional);
  },
  async invalidos(req, res) {
    const profissional = await Profissional.find({ status: 0 });
    return res.json(profissional);
  },
  async validados(req, res) {
    const profissional = await Profissional.find({ status: 1 });
    return res.json(profissional);
  },

  async update(req, res) {
    const profissional = await Profissional.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(profissional);
  },
  async destroy(req, res) {
    await Profissional.deleteOne({ _id: req.params.id });
    await Servico.deleteMany({ profissional: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  },
};
