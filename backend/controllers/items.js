const Item = require("../models/Item");

exports.getItems = async (req, res, next) => {
  const items = await Item.find();

  res.json({
    success: true,
    data: items,
  });
};
