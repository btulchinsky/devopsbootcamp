const express = require("express");
const path = require("path");

const port = 8080;

var app = express();

app.use(express.static("public"));

app.listen(port, () => {
  process.stdout.write("Listening on port " + port);
});
