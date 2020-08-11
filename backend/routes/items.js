const express = require("express");
const router = express.Router();

const { getItems, getItem } = require("../controllers/items");

router.route("/").get(getItems);
router.route("/:id").get(getItem);

module.exports = router;
