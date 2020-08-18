const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/check-auth");

const {
  getItems,
  getItem,
  updateItem,
  deleteItem,
  createItem,
} = require("../controllers/items");

router.route("/").get(getItems).post(createItem);
router.route("/:id").get(getItem).put(protect, updateItem).delete(deleteItem);

module.exports = router;
