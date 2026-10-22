const express = require("express");
const errorHandler = require("./error-handler");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.use(errorHandler);

module.exports = app;
