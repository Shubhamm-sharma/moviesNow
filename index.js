const express = require("express");
const dbConnect = require("./dbConnect/dbConnect");
const userRoute = require("./user/userRoute");
const cors = require(`cors`);
const app = express();
const port = 8000;
const DB_URL = `mongodb://localhost:27017`;

app.use(express.json());

app.use(cors());

dbConnect(DB_URL);

app.use(userRoute);

app.listen(port, () => console.log(`App listening at http://localhost:8000`));

module.exports = app;
