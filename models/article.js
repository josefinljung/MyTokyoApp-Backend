const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    Title: String,
    Date: String,
    Copy: String,
    Image: String,
});

module.exports = mongoose.model('Article', ArticleSchema);