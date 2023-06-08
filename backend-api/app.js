const express = require("express");
const cors = require("cors");
const db = require("./connection");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items").then(({ rows: items }) => {
    res.status(200).send({ items });
  });
});

app.post("/api/items", (req, res) => {
  const { body } = req;

  db.query("INSERT INTO items (title) VALUES ($1) RETURNING *;", [
    body.item,
  ]).then(({ rows: [item] }) => {
    res.status(201).send({ item });
  });
});

module.exports = app;
