const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  console.log(err.stack);

  console.log("err->", err);
  console.log("err.name", err.name);

  if (err.name === "CastError") {
    const message = `No resource found for id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    error = new ErrorResponse(`Cannot have duplicates`, 400);
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    error = new ErrorResponse(messages, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
