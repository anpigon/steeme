const express = require("express");
const app = express();
app.use(express.static("dist"));
const server = app.listen(3000, function() {
  console.log("Express server has started on port 3000");
});
