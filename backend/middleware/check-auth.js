const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      success: false,
    });
  }
};
