const mongoose = require("mongoose");

const dbConnect = async (DB_URL) => {
  const dbName = {
    dbName: "shopcart",
  };
  await mongoose.connect(DB_URL, dbName);
  console.log(`Connected to DB ${dbName.dbName}`);
};

module.exports = dbConnect;
