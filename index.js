const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.get("*", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, "/404.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
