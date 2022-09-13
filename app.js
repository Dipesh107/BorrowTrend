//jshint esversion:6
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require('body-parser');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const ejs = require('ejs');
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');

const razorpay = new Razorpay({
  key_id: process.env.KEYID,
  key_secret: process.env.KEYSECRET,
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "dipeshpatil013@gmail.com",
    pass: "Dipesh@123"
  }
});

// Modules and Datas imports

// Models
const User = require("./src/models/user");
const Clothe = require("./src/models/clothes");
const Shoe = require("./src/models/shoes");
const Jewellery = require("./src/models/jewellery");
const cart = require("./src/models/cart");

// Data
const clothesData = require("./src/data/clothes");
const shoesData = require("./src/data/shoes");
const jewelleryData = require("./src/data/jewellery");
const { rawListeners } = require('./src/models/user');

// Controllers Import

// Settings views and templating engines and Databases with sessions
mongoose.connect("mongodb://localhost/testDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require("express-session")({
  secret: "Rentalweb",
  resave: false,
  saveUninitialized: false
}));


// Data Imports and Deletes for every section
const importData = async () => {
  try {
    //Clothe Data Import
    await Clothe.deleteMany({});
    await Clothe.insertMany(clothesData);

    //Shoes Data
    await Shoe.deleteMany({});
    await Shoe.insertMany(shoesData);

    //jewellery Data
    await Jewellery.deleteMany({});
    await Jewellery.insertMany(jewelleryData);

    console.log("Data import Success");
  } catch (error) {
    console.error("Error while importing the Data");
  }
}

importData();

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

// Routes Decleration
app.get("/", isLoggedIn, function (req, res) {
  res.render('index', { username: req.user.username });
});

app.get("/home", function (req, res) {
  res.render('index', { username: req.user.username });
});

// Clothes Section Routes Here
app.get("/clothes", function (req, res) {
  res.render('clothes');
});

app.get("/clothallproducts", async (req, res) => {
  try {
    const clothes = await Clothe.find({});
    res.render('clothproductdetails', { clothes: clothes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/clothallproducts/:id", function (req, res) {
  const requestedId = req.params.id;

  Clothe.findOne({ _id: requestedId }, function (err, clothe) {
    if (!err) {
      res.render("preproduct", {
        id: requestedId,
        name: clothe.name,
        imageUrl: clothe.imageUrl,
        description: clothe.description,
        price: clothe.price,
        counterInStock: clothe.counterInStock,
      });
    };
  });
});

app.get("/addClothe/:id", function (req, res) {
  const requestedId = req.params.id;

  Clothe.findOne({ _id: requestedId }, function (err, c) {
    if (!err) {
      res.render('addtocart', {
        id: requestedId,
        name: c.name,
        qty: 1,
        description: c.description,
        price: c.price,
        imageUrl: c.imageUrl
      })
    }
  });
});
//Clothes All Routes Ends Here

// Jewellery Section Routes Here 
app.get("/jewellery", function (req, res) {
  res.render('jewellery');
});

app.get("/jewelleryproducts", async (req, res) => {
  try {
    const jewellery = await Jewellery.find({});
    res.render('jewelleryproductdetails', { jewellerys: jewellery })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
});

app.get("/jewelleryproducts/:id", function (req, res) {
  const requestedId = req.params.id;

  Jewellery.findOne({ _id: requestedId }, function (err, jewellery) {
    if (!err) {
      res.render("preproductjewellery", {
        id: requestedId,
        name: jewellery.name,
        imageUrl: jewellery.imageUrl,
        description: jewellery.description,
        price: jewellery.price,
        counterInStock: jewellery.counterInStock,
      });
    };
  });
});

app.get("/addJewellery/:id", function (req, res) {
  const requestedId = req.params.id;

  Jewellery.findOne({ _id: requestedId }, function (err, c) {
    if (!err) {
      res.render('addtocartJewellery', {
        id: requestedId,
        name: c.name,
        qty: 1,
        description: c.description,
        price: c.price,
        imageUrl: c.imageUrl
      })
    }
  });
});
//Jewellery All Routes Ends Here

// Shoes section Routes Here 
app.get("/shoes", function (req, res) {
  res.render('shoes');
});

app.get("/shoesallproducts", async (req, res) => {
  try {
    const shoes = await Shoe.find({});
    res.render('shoesproductdetails', { shoes: shoes })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" })
  }
});


app.get("/shoesallproducts/:id", function (req, res) {
  const requestedId = req.params.id;

  Shoe.findOne({ _id: requestedId }, function (err, shoe) {
    if (!err) {
      res.render("preproductshoes", {
        id: requestedId,
        name: shoe.name,
        imageUrl: shoe.imageUrl,
        description: shoe.description,
        price: shoe.price,
        counterInStock: shoe.counterInStock,
      });
    };
  });
});

app.get("/addShoe/:id", function (req, res) {
  const requestedId = req.params.id;

  Shoe.findOne({ _id: requestedId }, function (err, c) {
    if (!err) {
      res.render('addtocartShoes', {
        id: requestedId,
        name: c.name,
        qty: 1,
        description: c.description,
        price: c.price,
        imageUrl: c.imageUrl
      })
    }
  });
});
//Shoes All Routes Ends Here

//Order Payments
// app.get("/checkout/:id", function (req, res) {

//   const requestedId = req.params.id;

//   Clothe.findOne({ _id: requestedId }, function (err, c) {
//     if (!err) {
//       res.render("payment", {
//         id: requestedId,
//         name: c.name,
//         imageUrl: c.imageUrl,
//         description: c.description,
//         price: c.price,
//         counterInStock: c.counterInStock,
//       });
//     };
//   });
// });

app.get("/payment", function (req, res) {
  res.render('payment')
});

app.post("/payment", function (req, res) {
  let options = {
    amount: 89900,
    currency: "INR",
  };

  razorpay.orders.create(options, function (err, order) {
    console.log(order);
    res.json(order);
  });
});

app.post("/is-order-completed", function (req, res) {
  razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDocument) => {
    if (paymentDocument.status == "captured") {
      res.redirect("/")
    } else {
      res.send("Error while processing payment.")
    }
  })
})

// Contact Section Routes Here
app.get("/contact", function (req, res) {
  res.render('contact')
});

app.post("/contact", function (req, res) {

  var output =  'Hi' + ' ' + req.body.username + ' ' + req.body.username2 + '.' + 'Thank you for contacting The Borrow Trend. We will look into the Query soon. Thank You!' +
  'Your Query is as follows:' + ' ' + req.body.query;
   
var mailOptions = {
  from: 'dipeshpatil013@gmail.com',
  to: req.body.email,
  subject: 'Sending mail from the Borrow Trend',
  text: output
}

transporter.sendMail(mailOptions, function(err, info){
  if(err) {
    console.log(err)
  } else {
    console.log("Email sent " + info.response);
  }
});
});
//Contact Section Routes Ends Here

app.get("/account", function (req, res) {
  res.render('account', { username: req.user.username, email: req.user.email, mobile: req.user.mobile, address: req.user.address });
});

app.get("/login", function (req, res) {
  res.render("login");
});


// Login section Routes Here 
app.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}), function (req, res) {

});

app.post("/register", async function (req, res) {
  User.register(new User({
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.number,
    address: req.body.address
  }), req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.render("register");
    }
    passport.authenticate("local")(req, res, function () {
      res.redirect("/login")
    })
  })
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});

// Listening to The Server 
const port = process.env.PORT || 3000;
app.listen(port, function (res, req) {
  console.log(`Server Running on Port ${port}`);
});