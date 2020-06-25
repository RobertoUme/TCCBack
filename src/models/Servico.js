const { Schema, model } = require("mongoose");

const ServicosSchema = new Schema(
  {
    profissional: {
      type: Schema.Types.ObjectId,
      ref:'Profissional',
      required: true
    },
    tipo:{
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    visualizacao:{
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Servicos", ServicosSchema);
