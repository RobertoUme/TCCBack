const Admin = require("../models/Admin");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;
    const adm = await Admin.findOne({ email }).select("+password");

    if (!adm) {
      return res.status(400).json({ error: "Admin não encontrado" });
    }
    if (!(await adm.compareHash(password))) {
      return res.status(400).json({ error: "Senha invalida" });
    }

    return res.json({ adm, token: Admin.generateToken(adm) });
  },
};
