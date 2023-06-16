const mongoose = require(`mongoose`);

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPass: String,
});

const userSchema = mongoose.model(`user`, schema);

module.exports = userSchema;
