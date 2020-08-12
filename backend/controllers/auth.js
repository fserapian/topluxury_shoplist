const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

/**
 * @desc    Register user
 * @route   POST /api/v1/auth/register
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

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  public
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return new ErrorResponse("Please enter email and password", 400);
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return new ErrorResponse("Invalid credentials", 401);
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
