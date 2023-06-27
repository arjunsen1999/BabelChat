const asyncHandler = require("express-async-handler");
const { AuthModel } = require("../models/auth.model");
const { AppError } = require("../class/AppError");
const bcrypt = require("bcrypt");

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // if user with this email exists
  const isUserExists = await AuthModel.findOne({ email });
  if (isUserExists) {
    next(new AppError(`This ${email} already exists please login`, 400));
  }

  // if user not exists then create user
  // hash password
  const hashPassword = bcrypt.hash(password, process.env.SALT_ROUND);
  // create user
  const user = await AuthModel.create({ name, email, password: hashPassword });

  // send response
  const response = {
    status: "success",
    message: "Signup Successfully!",
  };

  return res.status(200).json(response);
});
