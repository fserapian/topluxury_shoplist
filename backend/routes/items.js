const express = require("express");
const router = express.Router();

const { getItems } = require("../controllers/items");

router.route("/").get(getItems);

// router.get("/", (req, res, next) => {
//   res.status(200).json({
//     data: "The items",
//   });
// });

module.exports = router;
