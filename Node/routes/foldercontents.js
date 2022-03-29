var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
router.get("/contents", (req, res) => {
  const folderPath = path.join(__dirname, "../files");
  fs.readdir(folderPath, (err, files) => {
    if (err) res.json(err);
    console.log(files);
    res.send(files);
  });
});
router.get("/deletefile/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "../files/", req.params.fileName);
  fs.unlink(filePath, (err) => {
    if (err) res.send(err);
    res.send(`File with name ${req.params.fileName} is deleted`);
  });
});
module.exports = router;
