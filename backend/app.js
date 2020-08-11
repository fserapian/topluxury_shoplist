const express = require("express");
const errorHandler = require("./middleware/error-handler");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware to do something");
  next();
});

app.use(cors());

app.use("/api/v1/items", require("./routes/items"));
app.use("/api/v1/auth", require("./routes/auth"));

app.use(errorHandler);

module.exports = app;
