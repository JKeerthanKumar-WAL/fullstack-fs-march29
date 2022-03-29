var express = require("express");
var router = express.Router();
const { writeFile } = require("fs");
router.get("/:fileName/:fileContents", (req, res) => {
  writeFile(
    `files/${req.params.fileName}`,
    `${req.params.fileContents}`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("File is created/modified");
      }
    }
  );
});
module.exports = router;
