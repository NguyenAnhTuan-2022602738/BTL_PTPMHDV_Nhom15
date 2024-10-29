const dashboardRouters = require("./dashboard.route");
const systemAdmin = require("../../config/system");

module.exports = (app) => {
    const PATH_ADMIN = systemAdmin.prefixAdmin;
    
    app.use(PATH_ADMIN + "/dashboard", dashboardRouters);
}