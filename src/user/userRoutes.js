const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPassword, decryptPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);

module.exports = userRouter;