const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Categories => field => ['type', 'color']
const CategoriesSchema = new mongoose.Schema({
    type: {type: String, default: "Investment"},
    color: {type: String, default: "#FCBE44"}
})


module.exports = mongoose.model("Categoriesmodel", CategoriesSchema );