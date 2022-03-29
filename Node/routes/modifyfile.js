var express = require("express");
var router = express.Router();
const fs = require("fs");
const { writeFile, readFile } = require("fs");
router.get("/readfile/:fileName", (req, res) => {
  fs.readFile(`files/${req.params.fileName}`, "utf8", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
router.get("/modifyfilecontent/:fileName/:fileContent", (req, res) => {
  fs.writeFile(
    `files/${req.params.fileName}`,
    req.params.fileContent,
    (err) => {
      if (err) {
        res.json(err);
      } else {
        res.json("File content is modified");
      }
    }
  );
});
module.exports = router;
