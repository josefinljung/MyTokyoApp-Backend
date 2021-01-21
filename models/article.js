const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    Id: String,
    Title: String,
    Date: String,
    Copy: String,
    Copy2: String,
    Image: String,
    ExtraImage: String,
    PlaceName: String,
    PlaceAdress: String,
    PlaceOpeningHours: String
});

module.exports = mongoose.model('Article', ArticleSchema);