const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    Id: String,
    Title: String,
    Date: String,
    Copy: String,
    Copy2: String,
    Copy3: String,
    Image: String,
    Image2: String,
    PlaceName: String,
    PlaceAdress: String,
    PlaceOpeningHours: String
});

module.exports = mongoose.model('Article', ArticleSchema);