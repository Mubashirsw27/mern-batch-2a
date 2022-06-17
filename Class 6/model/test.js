const mongoose = require("mongoose");

module.exports = mongoose.model("test", { title: String, list: Array });
