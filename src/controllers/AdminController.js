const Admin = require("../models/Admin");
module.exports = {
  async store(req, res) {
    if (await Admin.findOne({ email: req.body.email })) {
      return res.status(400).json({ error: "Esse email já foi cadastrado" });
    }
    const adm = await Admin.create(req.body);
    return res.json(adm);
  },
  async list(req, res) {
    const adm = await Admin.find({});
    return res.json(adm);
  },
  async index(req, res) {
    const adm = await Admin.findOne({ email: req.params.email });
    if (!adm) {
      return res.status(400).json({ error: "Admin não encontrado" });
    }
    return res.json(adm);
  },
  async update(req, res) {
    const adm = await Admin.findByEmailAndUpdate(req.params.email, req.body, {
      new: true,
    });
    return res.json(adm);
  },
};
