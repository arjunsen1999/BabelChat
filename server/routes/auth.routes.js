const authRouter = require("express").Router();
const auth = require("../controller/auth.controller");
const middleware = require("../middleware/ValidationError.middleware");
const { body } = require("express-validator");

authRouter.route("/signup").post(
  [
    body("name", "Enter your name").not().isEmpty(),
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password length must be atleast 4").isLength({
      min: 4,
    }),
  ],
  middleware.validationError,
  auth.signup
);

authRouter.route("/login").post(
  [
    body("email", "Enter a vaild email").isEmail(),
    body("password", "Password length must be atleast 4").isLength({
      min: 4,
    }),
  ],
  middleware.validationError,
  auth.login
);

module.exports = {
  authRouter,
};
