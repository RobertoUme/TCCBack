const { Schema, model } = require("mongoose");

const ProfissionalSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    crp: {
      type: Number,
      unique: true,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    telefone:{
      type: Number,
      required: true
    },
    serv: {
      type: String,
      required: true
    },
    status:{
      type: Number,
      required: true
    }
  },

  {
    timestamps: true
  }
);
module.exports = model("Profissional", ProfissionalSchema);
