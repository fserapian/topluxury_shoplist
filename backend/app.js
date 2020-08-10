const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use((req, res, next) => {
  console.log("Middleware to do something");
  next();
});

app.use((req, res) => {
  res.send("THE RESPONSE");
});

module.exports = app;
