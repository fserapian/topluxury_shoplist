const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./backend/config/config.env" });

// Models
const Item = require("./backend/models/Item");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Read the items
const items = JSON.parse(
  fs.readFileSync(`${__dirname}/backend/_data/items.json`, "utf-8")
);

const importData = async () => {
  try {
    await Item.create(items);
    console.log("Data imported!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Item.deleteMany();
    console.log("Data deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  console.log("Importing...");
  importData();
} else if (process.argv[2] === "-d") {
  console.log("Deleting...");
  deleteData();
}
