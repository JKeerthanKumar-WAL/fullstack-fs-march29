var express = require("express");
var router = express.Router();
const fs = require("fs");
router.get("/:folderName", (req, res) => {
  if (!fs.existsSync(`${req.params.folderName}`)) {
    fs.mkdir(`${req.params.folderName}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Folder is created");
      }
    });
  } else {
    res.send("Folder already exists.");
  }
});
module.exports = router;
