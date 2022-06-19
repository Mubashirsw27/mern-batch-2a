require("./config/dotEnv");

// 3rd party modules

const express = require("express");

// User defined modules

const middleware = require("./middlewares");
require("./config/mongodb")
const route = require("./route");
// require("./model/test")

// Express Container
const app = express();



// Middlewars

app.use(middleware.bodyParser);
app.use(middleware.morgan);
app.use(route);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running on ${process.env.PORT}`);
});
