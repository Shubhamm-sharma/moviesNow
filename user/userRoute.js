const express = require("express");
const { postUser, loginUser } = require("./userController");

const userRoute = express.Router();

userRoute.post(`/register`, postUser);
userRoute.post(`/login`, loginUser);

module.exports = userRoute;
