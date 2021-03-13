const router = require("express").Router();
const fileAnalyseRouter = require("./fileanalyse");
const path = require("path");

module.exports = params => {
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../views/index.html"));
  });
  router.use("/api/fileanalyse", fileAnalyseRouter());

  return router;
};
