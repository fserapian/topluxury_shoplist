const User = require("../models/User");

/**
 * @desc    Register user
 * @route   GET /api/v1/auth/register
 * @access  public
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
