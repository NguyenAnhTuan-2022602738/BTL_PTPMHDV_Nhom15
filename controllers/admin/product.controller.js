const Car_items = require("../../models/product.model");

//[GET] /admin/car_items
module.exports.index = async (req, res) => {

    let find = {
        deleted: false
    };

    const cars = await Car_items.find(find);

    console.log(cars)
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách xe",
        Car_items: cars
    });
};