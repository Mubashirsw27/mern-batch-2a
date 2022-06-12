require("./config/dotEnv");

// 3rd party modules

const express = require("express");

// User defined modules

const middleware = require("./middlewares");
const route = require("./route");

// Express Container
const app = express();

// Middlewars

app.use(middleware.bodyParser);
app.use(middleware.morgan);
app.use(route);

console.log(process.env.PORT);

PORT = 8080;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running on ${PORT}`);
});
