const userModel = require(`./userModel`);
const jwt = require("jsonwebtoken");
const SECRET_KEY = `najklanajlasnakljnanaklnaklajkldakdajwkdlwkldwklladkalk`;

const postUser = async (req, res) => {
  console.log(req.body, "****************************************");
  const { name, email, password, confirmPass } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    if (name && email && password && confirmPass) {
      if (password === confirmPass) {
        const data = await userModel({
          name,
          email,
          password,
          confirmPass,
        });
        await data.save();
        // const token = jwt.sign({ userId: data._id }, SECRET_KEY);
        res.send({ msg: `User registered Successfully`, data });
      } else {
        res.send({ msg: `Password and Confirm password do not match` });
      }
    } else {
      res.send({ msg: `All fields are required` });
    }
  } else {
    res.send({ msg: `Already registered user` });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    if (email && password) {
      if (email === user.email && password === user.password) {
        const options = {
          issuer: "Shubham_Sharma",
          expiresIn: "1d",
        };
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, options);
        console.log(req.headers, "head");
        console.log(req.body, "body");
        res.send({ msg: "Login Successful", token });
      } else {
        res.send({ msg: "Incorrect email or password" });
      }
    } else {
      res.send({ msg: "All fields are required" });
    }
  } else {
    res.send({ msg: "No user found" });
  }
};

module.exports = { postUser, loginUser };
