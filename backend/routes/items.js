const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/check-auth");

const {
  getItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

router.route("/").get(getItems);
router
  .route("/:id")
  .get(getItem)
  .put(protect, updateItem)
  .delete(protect, deleteItem);

module.exports = router;
