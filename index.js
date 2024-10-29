const express = require('express');
require("dotenv").config();

const database = require("./config/database");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const systemConfig = require("./config/system");
database.connect();

const app = express();
const port = process.env.PORT;

//server sight render
app.set("views", "./views");
app.set("view engine", "pug");

// App local variable - tạo ra biến toàn cục
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public")); //dùng để public dữ liệu

//routes
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});