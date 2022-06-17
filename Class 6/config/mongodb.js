const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Db Connect");
  })
  .catch((err) => {
    console.log(err);
  });