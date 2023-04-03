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

var Article = new mongoose.Schema(
  {
    title: String,
    img: String,
    author: String, 
    authorImg: String,
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
    ]
  }
)

mongoose.model("Article", Article);

module.exports = mongoose.model("Article");
