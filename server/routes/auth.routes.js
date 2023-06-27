const authRouter = require("express").Router();
const auth = require("../controller/auth.controller");

authRouter.route("/signup").post(auth.signup);
authRouter.route("/login").post(auth.login);

module.exports = {
  authRouter,
};
