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
    //End Tối ưu tìm kiếm


    //pagination
    let objectPagination = {
        currentPage: 1,
        limitItems: 10
    }

    if(req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

    const countCars = await Car_items.countDocuments(find);
    const totalPage = Math.ceil(countCars / objectPagination.limitItems);
    objectPagination.totalPage = totalPage;
    //End pagination

    const cars = await Car_items.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
    
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách xe",
        Car_items: cars,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};