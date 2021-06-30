const express = require("express");

const app = express();
const PORT = 3000;
const nunjucks = require("nunjucks");

app.set("view engine", "njk");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.use(express.static("./"));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/", function (req, res) {
  res.render("index", { page_title: "fdfs" });
});
