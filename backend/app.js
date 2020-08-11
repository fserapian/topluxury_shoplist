const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware to do something");
  next();
});

// app.get("/api/v1/items", (req, res) => {
//   res.json({
//     msg: "The message",
//   });
// });

app.use("/api/v1/items", require("./routes/items"));

module.exports = app;
