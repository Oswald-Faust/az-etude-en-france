var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const BlogArticle = require('./BlogArticle');

router.post("/new", async (req, res) => {
    const newArticle = new BlogArticle({
        title: req.body.title,
        author: req.body.author,
        descriptivePicture : req.body.illustration,
        description: req.body.description,
        content: req.body.content,
        tags : [req.body.tags],
    });
    await newArticle.save()
        .then((result) => {
            console.log(result);
            res.status(200).send({message: "new article saved successfuly"});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({message: "something wrong with this article"});
        });
});

router.get("/article/:title", (req, res) => {
    BlogArticle.findOne({title: req.params.title})
        .then((article) => {
            if (article) res.status(201).send(article)
            res.status(404).send("error: can't found article");
        }).catch((err) => {
            res.status(err.status).send("somthing went wrong with this search");
        });
})

router.delete("/delete/:title", (req, res) => {
    BlogArticle.findOneAndDelete({title: req.params.title}, (err, article) => {
        if (err) return res.status(500).send("There was a problem deleting this article.");
        res.status(200).send("article: "+ article.title +" was deleted.");
    })
});

router.put("/update/article/:title", (req, res) => {
    BlogArticle.findOneAndUpdate({title: req.params.title}, req.body, {new: true}, (err, article) => {
        if (err)
        return res.status(500).send("There was a problem searching this article.");
        res.status(200).send({message: "update " + article.title + ": success"});
    })
});

router.put("/update/:id", (req, res) => {
    BlogArticle.findByIdAndUpdate(req.params.id, req.body, {new: true},  function(err, article) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send({message: article.title + " update successfully"});
    });
});

module.exports = router;
