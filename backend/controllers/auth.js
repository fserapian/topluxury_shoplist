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

    const token = user.getSignedJwtToken();

    res.status(201).json({
      success: true,
      token: token,
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
      return next(new ErrorResponse("Please enter email and password", 400));
    }

    const user = await User.findOne({ email: email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check if passwords match
    const passwordsMatch = await user.matchPasswords(password);

    if (!passwordsMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};
