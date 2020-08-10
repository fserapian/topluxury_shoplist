const dotenv = require("dotenv");
dotenv.config({ path: "./backend/config/config.env" });

const app = require("./backend/app");

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
  )
);
