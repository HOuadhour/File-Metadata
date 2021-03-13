const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes");

const app = express();

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/", router());

module.exports = app;
