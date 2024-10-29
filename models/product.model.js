const mongoose = require("mongoose");

const Car_itemsSchema = new mongoose.Schema(
    {
        name: String,
        name_link: String,
        brand: String,
        version: String,
        vehicle_segment: String,
        engine: String,
        price: String,
        imageUrl: Array,
        paramater_links: String
        // deleted: Boolean,
    }
);


const Car_items = mongoose.model('Car_items', Car_itemsSchema, "Car_items");

module.exports = Car_items;