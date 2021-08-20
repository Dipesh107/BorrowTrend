const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

const app = express();

//settings views and templating engines
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render('main');
});

app.get("/home", function (req, res) {
  res.render('index');
});

app.get("/clothes", function (req, res) {
  res.render('products/clothes');
});

app.get("/jewellery", function (req, res) {
  res.render('products/jewellery');
});

app.get("/shoes", function (req, res) {
  res.render('products/shoes');
});

app.get("/account", function (req, res) {
  res.render('account');
});

app.get("/contact", function (req, res) {
  res.render('contact')
});

app.listen(port, function (res, req) {
  console.log("Server Running on Port " + port);
});