const ErrorResponse = require("../utils/errorResponse");
const Item = require("../models/Item");

exports.getItems = async (req, res, next) => {
  const items = await Item.find();

  res.json({
    success: true,
    data: items,
  });
};

/**
 * @desc  Get sinble item
 * @route  GET /api/v1/items/:id
 * @access  public
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @param {String} id
 */
exports.getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return next(
        new ErrorResponse(`No item found with id ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (err) {
    next(new ErrorResponse(`No item found with id ${req.params.id}`, 404));
  }
};
