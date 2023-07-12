require("dotenv").config();
const express = require("express");
const { connect } = require("./config/dbConfig");
const userroute = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userroute);
app.use(productRouter);
app.listen(3001, async function () {
  try {
    await connect();
  } catch (error) {
    console.error("Unable to connect mongodb", error.message);
  }
  console.log("sever running");
});
