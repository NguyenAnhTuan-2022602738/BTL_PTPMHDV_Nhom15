const Car_items = require("../../models/product.model");

module.exports.index = async (req, res) => {
    const cars = await Car_items.find({
        // deleted: false
    });
    
    console.log(cars);

    res.render("client/pages/products/index", {
        pageTitle: "Danh sách xe",
        Car_items: cars
    });
}