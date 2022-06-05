const { response } = require("express");
const express = require("express");

const app = express();

let myInfo = {
  name: "Mubashir Ibrahim",
  skills: "Coding and Gaming",
  sports: "Cricket",
};

app.get("/get", (request, response) => {
  response.send(myInfo);
});

app.post("/post", (request, response) => {
  response.send(myInfo);
});

app.put("/put", (request, response) => {
  myInfo = {
    name: "Mubi",
    skills: "Programming",
    sports: "none",
  };
  response.send(myInfo);
});

app.patch("/patch", (request, response) => {
  myInfo.name = "Mubashir";
  response.send(myInfo);
});

app.delete("/delete", (request, response) => {
  delete myInfo.name;
  response.send(myInfo);
});

app.listen(8080, () => {
  console.log("Server is running");
});

console.log("Hello backend Dev");
