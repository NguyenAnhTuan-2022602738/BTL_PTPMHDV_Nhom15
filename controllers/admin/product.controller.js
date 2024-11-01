const Car_items = require("../../models/product.model");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
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
    const countCars = await Car_items.countDocuments(find);

    let objectPagination = paginationHelper(
        {
            currentPage: 1,
            limitItems: 10,
        },
        req.query,
        countCars
    );
    //end pagination

  
    const cars = await Car_items.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
    
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách xe",
        Car_items: cars,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};

//[DELETE] /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id;
    try {
        await Car_items.deleteOne({ _id: id });
        res.redirect("back"); // Chuyển hướng đến trang danh sách sau khi xóa
    } catch (error) {
        console.error(error);
        res.status(500).send('Có lỗi xảy ra khi xóa sản phẩm');
    }

}