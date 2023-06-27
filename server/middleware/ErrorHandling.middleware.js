const ErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;

  return res.status(statusCode).json({
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};

module.exports = { ErrorHandler };
