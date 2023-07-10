const express = require("express");
const userroute=require("./routes/user")
const app = express();
app.use(userroute)
app.listen(3000, function() {console.log("sever running")})