const authRouter = require("express").Router();
const auth = require("../controller/auth.controller");
const middleware = require("../middleware/ValidationError.middleware");
const { body } = require("express-validator");

authRouter.route("/signup").post(
  [
    // name is required
    body("name").notEmpty().withMessage("Name is required"),
    // email required and valid email
    body("email", "Enter a vaild email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email"),
    // Password is required and password length must be atleast 4
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({
        min: 4,
      })
      .withMessage("Password length must be atleast 4"),
  ],
  middleware.validationError,
  auth.signup
);

authRouter.route("/login").post(
  [
    // email required and valid email
    body("email", "Enter a vaild email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email"),
    // Password is required and password length must be atleast 4
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({
        min: 4,
      })
      .withMessage("Password length must be atleast 4"),
  ],
  middleware.validationError,
  auth.login
);

module.exports = {
  authRouter,
};
