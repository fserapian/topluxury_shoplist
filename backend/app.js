const express = require("express");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware to do something");
  next();
});

app.use("/api/v1/items", require("./routes/items"));

app.use(errorHandler);

module.exports = app;
