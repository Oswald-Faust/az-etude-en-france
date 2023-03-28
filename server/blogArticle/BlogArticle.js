var mongoose = require('mongoose');

var BlogArticle = new mongoose.Schema ({
    title: String,
    author: String,
    illustration: String,
    Content: String,
    Comment: {
        author: String,
        content: String
    },
    like: Number,
    dislike: Number
})

mongoose.model('BlogArticle', BlogArticle);

module.exports = mongoose.model('BlogArticle');
