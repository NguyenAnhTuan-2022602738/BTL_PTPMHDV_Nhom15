const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const route = require("./routes/client/index.route");

mongoose.connect("mongodb://127.0.0.1:27017/BTL_PTPMHDV");


const app = express();
const port = process.env.PORT;

//server sight render
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public")); //dùng để public dữ liệu

//routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});