const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Todo")
  .then(() => {
    console.log("Db Connect");
  })
  .catch((err) => {
    console.log(err);
  });