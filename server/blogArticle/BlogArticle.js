var mongoose = require("mongoose");

var BlogArticle = new mongoose.Schema(
  {
    title: String,
    author: String,
    descriptivePicture: String,
    description: String,
    content: String,
    tags: [String],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        content: String,
        updated: Date,
      },
    ],
  },
  { timestamps: true }
);

mongoose.model("BlogArticle", BlogArticle);

module.exports = mongoose.model("BlogArticle");
