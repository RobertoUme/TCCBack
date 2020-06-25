const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect("mongodb+srv://umemura:30171122@cluster0-9wr6i.gcp.mongodb.net/test?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.set("useCreateIndex", true);
const routes = require("./routes");


server.use(routes);
server.listen(3000);
