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

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
})

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

app.get('*', function (req, res, next) {
  res.locals.cart = req.session.cart;
  next();
})


// Routes Decleration
app.get("/", function (req, res) {
  res.render('index');
});

app.get("/home", function (req, res) {
  res.render('index');
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
      res.render("preproduct", {
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

app.get("/addJewellery/:id", isLoggedIn, function (req, res) {
  const requestedId = req.params.id;

  Jewellery.findOne({ _id: requestedId }, function (err, c) {
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
      res.render("preproduct", {
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

app.get("/addShoe/:id", isLoggedIn, function (req, res) {
  const requestedId = req.params.id;

  Shoe.findOne({ _id: requestedId }, function (err, c) {
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
//Shoes All Routes Ends Here

//Order Payments
app.get("/checkout/:id", function (req, res) {

  const requestedId = req.params.id;

  Clothe.findOne({ _id: requestedId }, function (err, c) {
    if (!err) {
      res.render("payment", {
        id: requestedId,
        name: c.name,
        imageUrl: c.imageUrl,
        description: c.description,
        price: c.price,
        counterInStock: c.counterInStock,
      });
    };
  });
});

// Contact Section Routes Here
app.get("/contact", function (req, res) {
  res.render('contact')
});

app.post("/contact", function (req, res) {
  console.log(req.body.username)
  console.log(req.body.email)
  console.log(req.body.query)
})
//Contact Section Routes Ends Here

app.get("/account", isLoggedIn, function (req, res) {
  res.render('account');
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
    email: req.body.email
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


// Listening to The Server 
const port = process.env.PORT || 3000;
app.listen(port, function (res, req) {
  console.log(`Server Running on Port ${port}`);
});