import jwt from "jsonwebtoken";
import userModel from "../user/userModel";

const checkAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userID } = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findById(userID).select("-password");
      next();
    } catch (error) {}
  }
  if (!token) {
    res.send({ status: "Failed", message: "Invalid Token" });
  }
};

export default checkAuth;
