const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/travelDB");

module.exports = mongoose.connection;
