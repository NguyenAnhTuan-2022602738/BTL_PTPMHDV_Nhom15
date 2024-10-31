const Car_items = require("../../models/product.model");
const searchHelper = require("../../helpers/search");
//[GET] /admin/car_items
module.exports.index = async (req, res) => {

    let find = {
        deleted: false,
    };

    //Tối ưu tìm kiếm
    const objectSearch = searchHelper(req.query);

    if(objectSearch.regex){
        find.brand = objectSearch.regex;
    };

    const cars = await Car_items.find(find);

    console.log(cars)
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách xe",
        Car_items: cars,
        keyword: objectSearch.keyword
    });
};