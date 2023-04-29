var express = require('express');
var app = express();
var db = require('./db');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

var BlogArticleController = require('./blogArticle/BlogArticleController');
var UserController = require('./user/UserController');
var ServiceController = require('./services/ServiceController');


app.use('/users', UserController);
app.use('/blogs', BlogArticleController);
app.use('/services', ServiceController);

module.exports = app;
