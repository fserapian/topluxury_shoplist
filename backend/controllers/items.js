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
 * @desc  Get single item
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
    next(err);
  }
};

/**
 * @desc    Create new item
 * @route   POST /api/v1/items
 * @access  private
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.createItem = async (req, res, next) => {
  try {
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });

    item.save();

    res.status(201).json({
      success: true,
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc  Update item
 * @route  PUT /api/v1/items/:id
 * @access  private
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @param {String} id
 */
exports.updateItem = async (req, res, next) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item) {
      return next(
        new ErrorResponse(`No item found with id ${req.params.id}`, 404)
      );
    }

    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc  Delete item
 * @route  DELETE /api/v1/items/:id
 * @access  private
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @param {String} id
 */
exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return next(
        new ErrorResponse(`No item found with id ${req.params.id}`, 404)
      );
    }

    item.remove();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
