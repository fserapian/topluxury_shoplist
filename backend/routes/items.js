const express = require("express");
const router = express.Router();

const {
  getItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

router.route("/").get(getItems);
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;
