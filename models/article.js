const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    Id: String,
    Title: String,
    Date: String,
    Copy: String,
    Image: String,
});

module.exports = mongoose.model('Article', ArticleSchema);