const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dst: "./../uploads" }).single("upfile");

module.exports = params => {
  router.post("/", (req, res) => {
    upload(req, res, () => {
      res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
      });
    });
  });

  return router;
};
