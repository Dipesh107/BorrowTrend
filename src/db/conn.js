const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testDB", { useNewUrlParser: true, useUnifiedTopology: true });
