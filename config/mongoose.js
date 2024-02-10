// require the library
const mongoose = require("mongoose");
require("dotenv").config();

// retrieve the MongoDB connection URI from the environment variables
const mongodbUrl = "mongodb+srv://ssoumyajit245:zMjuiXL4bToQSL1s@cluster0.dcs4igg.mongodb.net/issueTracker02?retryWrites=true&w=majority";

// connect to the database with additional options to avoid deprecation warnings
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// acquire the connection (to check if it's successful)
const db = mongoose.connection;

// handle connection errors
db.on("error", function (err) {
  console.error("MongoDB connection error:", err.message);
  process.exit(1); // Exit the application if unable to connect to the database
});

// handle successful connection
db.once("open", function () {
  console.log("Successfully connected to the database");
});

// export the database connection
module.exports = db;
