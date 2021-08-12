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


app.listen(port, function (res, req) {
  console.log("Server Running on Port " + port);
});